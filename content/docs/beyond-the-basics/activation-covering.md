---
title: "Activation Covering"
description: "How graveyard hate can stifle Devourer activations, and how to play around it."
lead: "One of the seldom-discussed aspects of graveyard hate: how it can functionally stifle Devourer activations through 'covering' — and how to work around it."
date: 2026-05-20T00:00:00+00:00
lastmod: 2026-05-20T00:00:00+00:00
draft: false
build:
  list: never
  render: always
---

## What Is Covering?

One of the seldom-discussed aspects of graveyard hate is how it can functionally stifle Devourer activations through a process we call **covering**. In short, covering means creating combo-breaking events on the stack above an unresolved Devourer activation, so that we never get to resolve those activations if we aim to win the game.

Covering activations hasn't been an issue in traditional FEB lines, where the library is full and we have more than enough cards to deal lethal: not being able to resolve a single activation is rarely a barrier to winning, since we can simply activate Devourer again.

In **Scrounger-FEB lines**, however, the ability to fill the library after a Hermit activation is usually limited to one or two Scrounger activations, where the CMC of every single card counts. Getting a single activation covered can very well mean coming short of lethal, and with perfect knowledge (opponent has seen which cards you have put back on the library), the opponent will know which activations to cover to reduce our chances the most (usually Akroma or Palinchron).

In order to navigate these scenarios, it is good to define and work through the different ways activation covering can affect us, and how to work around them.

---

## A Simple Example

Consider this sequence:

1. We put a Devourer activation on the stack by exiling a 3 CMC card.
2. The opponent responds by activating Phyrexian Furnace targeting our Devourer in the graveyard.
3. We don't want to lose Devourer yet, we haven't exiled all the cards we intended to, so we activate Devourer in response to the Furnace.
4. After this second activation resolves, the sacrifice trigger of Devourer goes to the stack on top of the Furnace ability.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/Covering/Fig1.png" alt="Stack diagram showing a covered Devourer activation" class="img-fluid rounded">
</div>

The Devourer activation on the bottom of the stack has now become **unreachable**: in order to resolve it, we would need to sacrifice the very creature that would receive those counters. We call such an activation a **covered activation**.

---

## Solution 1: Stacking Activations

A usual solution is to **stack activations**. This means holding priority and putting Devourer activations on the stack without resolving them.

After stacking them, we do something to put a new card on the top of the graveyard:

- a Survival activation
- using Tog or Shifter's discard ability
- depleting a Gemstone Mine or Wall of Roots in play

This changes the text on Shifter, so that when we resolve the Devourer activations the sacrifice clause is not there anymore to trigger. In that scenario, we can let the stack resolve all the way down to the last activation: the exiling of Devourer is no longer relevant, because we have already put all the activations on the stack.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/Covering/Fig2.png" alt="Stack diagram showing stacked Devourer activations with a Survival activation on top" class="img-fluid rounded">
</div>

---

## Solution 2: Pre-Triggering the Sacrifice Clause

A second strategy is to **pre-trigger the sacrifice clause**. This is done by pumping Shapeshifter with Psychatog or Battlefield Scrounger so that, when Devourer is revealed, Shifter already has power 7+ and the sacrifice trigger goes directly to the stack.

This trigger won't trigger again until the existing sacrifice trigger in the stack resolves, so we are guaranteed that all the Devourer activations will now exist on top of the sacrifice trigger. Knowing that, we can just activate Devourer in response to any effect that intends to exile it, and keep resolving activations until we allow Devourer to be exiled and resolve any activations beneath that effect.

> Just discard a Triskelion on top of the graveyard before the sacrifice trigger resolves!

---

## A Worrisome Scenario: Hate on Triskelion

A different and more worrisome scenario for Hermit lines, where both Triskelion and Devourer are in the graveyard, is when the graveyard hate is **not directed at Devourer itself, but at Triskelion**. This happens either with a Furnace activation targeting Trike, or by using a Tormod's Crypt.

In this scenario we end up with two "can't resolve" events: the sacrifice of Shifter, and the exiling of our graveyard. The stacking of activations discussed above can work around the sacrifice trigger, but if we aim to use Triskelion for lethal, we can't afford to have our graveyard exiled: so the bottom activation becomes de facto covered.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/Covering/Fig3.png" alt="Stack diagram showing hate targeting Triskelion creating two covered activations" class="img-fluid rounded">
</div>

To solve this, we will need a way to either:

- **Rescue Triskelion from the graveyard** (Scrounger it back into the library and either Survival for it or mill it with Hermit)
- **Start the line with Triskelion already in our hand**

---

## Why This Matters

Activation covering is the most subtle way an opponent can disrupt a Scrounger-FEB line. Recognizing the patterns, and knowing which counter-strategy applies to each, is what turns a "I had it!" loss into a controlled, deterministic kill that survives any single piece of interaction.
