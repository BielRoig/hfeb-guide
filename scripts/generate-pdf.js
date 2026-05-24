#!/usr/bin/env node

const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 1414;
const BASE = `http://localhost:${PORT}`;
const OUT = 'public/hfeb-guide.pdf';

// Guide pages in order — edit this list to add/remove/reorder sections
const PAGES = [
  '/docs/the-deck/',
  '/docs/core-lines/',
  '/docs/advanced-lines/',
  '/docs/matchup-spread/',
  '/docs/matchup-spread/deadguy-ale/',
  '/docs/matchup-spread/dreadnought/',
  '/docs/matchup-spread/enchantress/',
  '/docs/matchup-spread/gat/',
  '/docs/matchup-spread/goblins/',
  '/docs/matchup-spread/hfeb-mirror/',
  '/docs/matchup-spread/landstill/',
  '/docs/matchup-spread/mono-black/',
  '/docs/matchup-spread/ponza/',
  '/docs/matchup-spread/replenish/',
  '/docs/matchup-spread/sligh/',
  '/docs/matchup-spread/stasis/',
  '/docs/matchup-spread/terrageddon/',
  '/docs/matchup-spread/the-rock/',
  '/docs/matchup-spread/ub-psychatog/',
  '/docs/beyond-the-basics/',
  '/docs/beyond-the-basics/activation-covering/',
  '/docs/beyond-the-basics/beating-hate/',
  '/docs/beyond-the-basics/cmc-distribution/',
  '/docs/beyond-the-basics/missing-items/',
  '/docs/beyond-the-basics/rules/',
  '/docs/beyond-the-basics/tips-tricks/',
  '/docs/puzzles/',
  '/docs/resources/',
];

function startServer() {
  return new Promise((resolve, reject) => {
    const mime = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ico': 'image/x-icon',
      '.webp': 'image/webp',
      '.json': 'application/json',
    };

    const server = http.createServer((req, res) => {
      let url = req.url.split('?')[0];
      let filepath = path.join('public', url);
      if (url.endsWith('/') || !path.extname(url)) {
        filepath = path.join('public', url, 'index.html');
      }

      fs.readFile(filepath, (err, data) => {
        if (err) { res.writeHead(404); res.end(); return; }
        const ext = path.extname(filepath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
      });
    });

    server.listen(PORT, () => resolve(server));
    server.on('error', reject);
  });
}

async function renderPage(browser, url) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Expand all collapsible elements before capturing
  await page.evaluate(() => {
    document.querySelectorAll('details').forEach(el => { el.open = true; });
    document.querySelectorAll('.collapse').forEach(el => el.classList.add('show'));
  });

  // Wait for Scryfall card images to finish loading
  await page.waitForFunction(
    () => {
      const cards = document.querySelectorAll('.card-inline[data-card-name]');
      if (!cards.length) return true;
      return Array.from(cards).every(el => el.querySelector('img.card-image'));
    },
    { timeout: 15000 }
  ).catch(() => console.warn(`  ⚠ card images timed out on ${url}`));

  const buffer = await page.pdf({
    format: 'A4',
    printBackground: false,
    margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
  });

  await page.close();
  return buffer;
}

async function main() {
  console.log('Generating PDF…');
  const server = await startServer();
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const merged = await PDFDocument.create();

  try {
    for (const pagePath of PAGES) {
      process.stdout.write(`  ${pagePath} … `);
      const buf = await renderPage(browser, `${BASE}${pagePath}`);
      const doc = await PDFDocument.load(buf);
      const copied = await merged.copyPages(doc, doc.getPageIndices());
      copied.forEach(p => merged.addPage(p));
      console.log(`${doc.getPageCount()} page(s)`);
    }

    const bytes = await merged.save();
    fs.writeFileSync(OUT, bytes);
    const mb = (bytes.length / 1024 / 1024).toFixed(1);
    console.log(`\nPDF saved → ${OUT} (${mb} MB, ${merged.getPageCount()} pages total)`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch(err => { console.error(err); process.exit(1); });
