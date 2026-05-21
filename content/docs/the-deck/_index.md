---
title: "The Deck"
description: "The current Hermit Full English Breakfast list with explanations and key cards."
lead: "The current HFEB list, with an introduction to the deck's engines, win conditions, and supporting cast."
date: 2026-05-20T00:00:00+00:00
lastmod: 2026-05-20T00:00:00+00:00
draft: false
---

## What is hFEB?

The hFEB deck (Hermit Full English Breakfast) is a combo deck built around **Volrath's Shapeshifter** and a series of tools to manipulate the top of the graveyard, allowing us to exploit Shifter's ability to the maximum. hFEB relies on two combos: the **FEB combo** (the original combo from the classic FEB deck) and the **Hermit combo** (the one that adds the "h" in the deck's name).

These two combos share a similar structure, each composed of three fundamental pieces: an engine that sets up the board, a first creature that consumes game resources to increase the size of Shifter, and a second creature that uses that size to inflict lethal damage.

---

## The FEB Combo

<div class="card-row">
{{< scryfall-card name="Survival of the Fittest" set="exo" />}}
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Triskelion" set="atq" />}}
</div>

The engine is **Survival of the Fittest**, which lets us discard creature cards from hand and tutor creatures from the deck — changing Shifter's form and cycling through threats. The two combo pieces are **Phyrexian Devourer** and **Triskelion**.

When Phyrexian Devourer is on top of the graveyard, Shapeshifter can exile cards from the top of the library to add +1/+1 counters based on each card's CMC. With 95 total CMC in the deck, Shifter can grow very quickly. Shifter can't stay big for long though — Devourer's trigger forces a sacrifice when its power exceeds 7. That's where Triskelion comes in: by discarding it to Survival, Shifter converts its +1/+1 counters into 1-damage pings for lethal.

---

## The Hermit Combo

<div class="card-row">
{{< scryfall-card name="Hermit Druid" set="tmp" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Akroma, Angel of Wrath" set="lgn" />}}
</div>

The engine is **Hermit Druid**, which mills the entire library since all our lands are non-basic. With a full graveyard, **Psychatog** takes the role of Devourer — exiling graveyard cards in exchange for +1/+1 pumps. Since these are not counters, Triskelion can't be the finisher, so **Akroma** closes the game in combat instead. Her haste, evasion, and trample are essential to convert those pumps into lethal damage.

---

## The Bridge: Battlefield Scrounger

<div class="scrounger-split">
  <div class="scrounger-img">
    {{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
  </div>
  <div class="scrounger-text" markdown="1">

The newest addition to the deck: **Battlefield Scrounger** bridges both combos. 

It allows using Hermit Druid as a setup tool for a FEB kill, and it gives the deck a powerful way to play around Graveyard Hate without actually having to remove it from the board. 

You’ll see a lot of Scrounger action throughout this guide!

  </div>
</div>

---

## The Toolbox

Beyond the combo pieces, hFEB runs a curated set of support cards that smooth out the deck's mana, recursion, disruption, and recovery. Click on any card to jump straight to its breakdown.

<div class="toolbox-grid">
  <a href="#mana-creatures" class="toolbox-card">{{< scryfall-card name="Birds of Paradise" set="lea" />}}</a>
  <a href="#cabal-therapy" class="toolbox-card">{{< scryfall-card name="Cabal Therapy" set="ody" />}}</a>
  <a href="#unearth" class="toolbox-card">{{< scryfall-card name="Unearth" set="uds" />}}</a>
  <a href="#squee" class="toolbox-card">{{< scryfall-card name="Squee, Goblin Nabob" set="mmq" />}}</a>
  <a href="#palinchron" class="toolbox-card">{{< scryfall-card name="Palinchron" set="usg" />}}</a>
  <a href="#karmic-guide" class="toolbox-card">{{< scryfall-card name="Karmic Guide" set="usg" />}}</a>
  <a href="#animate-dead" class="toolbox-card">{{< scryfall-card name="Animate Dead" set="lea" />}}</a>
  <a href="#krosan-reclamation" class="toolbox-card">{{< scryfall-card name="Krosan Reclamation" set="ody" />}}</a>
</div>

### Mana Creatures {#mana-creatures .toolbox-section}

**Birds of Paradise**, **Wall of Roots**, and to a lesser extent **Elvish Spirit Guide**, are here for the simplest and most important reason: they make the deck faster and smoother.

They accelerate our early turns, fix our mana, and help us reach the key setup turns where Survival of the Fittest, Volrath's Shapeshifter, or Hermit-related lines become active. There is nothing fancy about this role, but it matters a lot: hFEB is a technical combo deck, and having an extra mana at the right time often means turning a slow setup into an immediate kill.

**Wall of Roots** is especially important because it can generate mana without tapping, which matters in turns where mana efficiency is extremely tight.

### Cabal Therapy {#cabal-therapy .toolbox-section}

**Cabal Therapy** is one of the most important interaction spells in the deck.

It gives you information, strips away relevant answers, and clears the way before committing to a combo line. In Premodern, it is already one of the strongest discard spells, but hFEB uses it especially well because the deck naturally plays creatures that can be sacrificed profitably.

Mana creatures that are no longer needed, creatures with enters-the-battlefield value, or creatures you actively want back in the graveyard can all become flashback material. This makes Cabal Therapy both disruption and synergy: it protects your combo while also helping you manage your own board and graveyard.

In practice, Therapy often lets you turn two mana and one expendable creature into two discard effects. For a deck trying to resolve a fragile but powerful engine, that is extremely relevant.

### Unearth {#unearth .toolbox-section}

**Unearth** is one of the most efficient recursion spells in the deck.

Most importantly, it brings back Volrath's Shapeshifter, which is often the central piece of both the FEB kill and the Hermit kill. It also cycles, which means it is rarely completely dead, even in games where recursion is not immediately needed.

A key interaction is that Unearth can reanimate Shapeshifter while the top creature card of the graveyard has an enters-the-battlefield ability. If Shapeshifter enters while copying that creature, the ETB ability will trigger. Then, once Unearth finishes resolving, Unearth itself will be on top of the graveyard and Shapeshifter may become a blank 0/1, but the triggered ability is already on the stack.

This makes Unearth much more than a simple reanimation spell. It can create important timing windows and enable lines that depend on Shapeshifter entering as the right creature for just a moment.

### Squee, Goblin Nabob {#squee .toolbox-section}

**Squee** is almost an auto-include in any serious Survival deck.

With Survival of the Fittest, Squee turns every turn cycle into a repeatable creature tutor. You discard Squee, search for a creature, then get Squee back during your upkeep and do it again. This gives the deck inevitability, improves bad hands, and lets you turn even a single creature in hand into multiple resources over time.

One of the most important patterns is the end-step setup: if you have Survival and only one creature in hand, you can discard that creature to find Squee, discard Squee to find another creature, untap, return Squee to your hand, and suddenly start the turn with two usable creature cards. This greatly improves your ability to assemble a combo from very limited resources.

Squee can also act as graveyard bait. Against cards like Tormod's Crypt or other graveyard interaction, the opponent may be forced to respect the recursion engine, sometimes opening a window for the real combo.

### Palinchron {#palinchron .toolbox-section}

**Palinchron** is one of the cards that helps the deck speed up its winning turns.

Its main role is mana generation. When combined with Volrath's Shapeshifter, Palinchron can effectively double or greatly increase the amount of mana available in a turn, especially if you have another creature in hand to continue a Survival chain. This makes it much easier to move from setup into a full combo turn.

Palinchron also has a relevant role in **Battlefield Scrounger** lines. When you need to shuffle back exactly enough mana value for a Devourer-style kill, Palinchron, Battlefield Scrounger, and Akroma, Angel of Wrath add up to exactly 20 mana value. That makes Palinchron not just a mana engine, but also a useful piece in deterministic Scrounger setups.

### Karmic Guide {#karmic-guide .toolbox-section}

**Karmic Guide** is one of the key cards for winning through Hermit-based lines.

After a Hermit Druid activation, Karmic Guide often provides the bridge between a fully loaded graveyard and an actual win. It can reanimate Volrath's Shapeshifter, recover a missing creature, or turn a graveyard position into a lethal board state.

It is also useful outside of pure Hermit kills. Sometimes Karmic Guide lets you win FEB-style with only one creature in hand, or simply reanimates a high-impact creature such as Akroma or Triskelion. Even when it is not part of a deterministic kill, it gives the deck a strong recovery tool and a way to convert graveyard resources into battlefield presence.

### Animate Dead {#animate-dead .toolbox-section}

**Animate Dead** is one of the newer additions, and it is extremely interesting in this shell.

Its strongest interaction is with Karmic Guide, but it also functions as a flexible recursion piece for Volrath's Shapeshifter or other key creatures. One of the main differences from Unearth is that Animate Dead does not put itself on top of the graveyard after resolving. This can matter a lot, because it lets you reanimate a creature without immediately disturbing the top of your graveyard in the same way Unearth does.

Because of this, Animate Dead can sometimes turn a messy or awkward graveyard order into a clean, deterministic win. It gives the deck another way to convert graveyard access into battlefield access, especially in situations where the exact top card of the graveyard matters.

### Krosan Reclamation {#krosan-reclamation .toolbox-section}

**Krosan Reclamation** is one of the most important utility cards in the deck, especially in Hermit Druid lines.

If you activate Hermit Druid during your upkeep, Krosan Reclamation can let you shuffle specific cards back into your library before your draw step. Instead of drawing from an empty library, you draw one of the cards you intentionally put back. This makes it a key tool for post-Hermit planning.

It can also increase the number of cards left in the library for Phyrexian Devourer or Battlefield Scrounger lines, letting you create enough resources for a kill. It is not only a self-targeting tool either: Krosan Reclamation can target the opponent, which can matter against opposing graveyard strategies or specific graveyard-based setups.

Another important detail is that Krosan Reclamation targets a player and up to two cards in that graveyard. This means it can be used flexibly, even when you only need to shuffle back one card, and in some situations the shuffle effect can still matter even if the number of cards being returned changes before resolution.

---

## The Mana Base

<div class="toolbox-grid">
  <a class="toolbox-card">{{< scryfall-card name="Llanowar Wastes" set="9ed" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Yavimaya Coast" set="9ed" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Gemstone Mine" set="tmp" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="City of Brass" set="arb" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Reflecting Pool" set="tmp" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Undiscovered Paradise" set="vis" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Treva's Ruins" set="apc" />}}</a>
  <a class="toolbox-card">{{< scryfall-card name="Underground River" set="9ed" />}}</a>
</div>

The mana base is one of the biggest deckbuilding costs of hFEB.

Because the deck wants Hermit Druid to be deterministic, it cannot play basic lands. If the deck contained even a single basic land, Hermit Druid could stop before milling the entire library, making the Hermit kill much less reliable. This means the whole mana base has to be built out of nonbasic lands while still supporting a very demanding multicolor shell.

### The Core Sixteen

The core sixteen lands are, in my opinion, the non-negotiable foundation of the deck:

- 4x Llanowar Wastes
- 4x Yavimaya Coast
- 4x Gemstone Mine
- 4x City of Brass

These sixteen lands are not really interchangeable. They give the deck access to the colors it needs early, enter untapped, and allow the deck to function without compromising the Hermit Druid plan.

### Reflecting Pool

To these, the deck adds **3 Reflecting Pool**. Reflecting Pool is especially valuable because it often turns painful mana into clean mana. When paired with a painland or City of Brass, it lets you produce the colors you need without repeatedly taking damage. In long games, that matters a lot: hFEB can spend several turns sculpting a hand or setting up a graveyard, and saving two or three life over the course of a game can easily change a race.

### Undiscovered Paradise

The deck also plays **Undiscovered Paradise**. This is not one of the strongest lands in the deck, but it has a specific role. It helps you continue making land drops when you otherwise might miss one, and because it returns to your hand, it can give you access to mana both on your turn and again after replaying it later. It is a little awkward, but the flexibility is useful enough to justify the slot.

### The Lair Slot

Then there is the **Lair slot**, usually **Treva's Ruins**. In most versions, the deck is primarily interested in the Treva colors: green, white, and blue. That said, this is one of the more flexible land slots in the deck. Depending on the sideboard and the exact color requirements of the 75, Treva's Ruins can become **Darigaaz's Caldera** if you want better access to black-red-green, or **Crosis's Catacombs** if the deck needs blue-black-red instead. For example, if your sideboard leans harder on red cards like Pyroclasm, changing the Lair can be a clean way to support that plan.

### The Flex Painland

The final, twenty-second land is usually another painland: effectively the ninth painland of the deck. This slot is very customizable. It is often **Underground River**, giving access to blue and black, but it can change depending on the sideboard configuration.

If the deck wants more red, **Karplusan Forest** becomes attractive. If it wants more white and black, especially for cards like Swords to Plowshares or other white interaction, **Caves of Koilos** is an option. If the list wants more white and green, **Brushland** can fill the role instead.

So while the first sixteen lands are fixed and the three Reflecting Pool are very close to fixed, the last few slots are where the mana base can adapt to the exact version of hFEB you are registering. In practice, these lands should be chosen by looking at the full 75, not just the maindeck.

---

<div class="matchup-summary" markdown="1">

## Philosophy

Mastering hFEB is less about memorizing fixed patterns and more about understanding how to adapt its engines to the game at hand. This guide will help you develop both the technical knowledge and the strategic intuition required to pilot the deck to its full potential.

> *For a complementary introduction, check out the [CrazyCarl Primer](https://www.patreon.com/posts/premodern-hfeb-110703523).*

</div>
