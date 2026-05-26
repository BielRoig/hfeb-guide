---
title: "CMC Distribution"
description: "Monte Carlo simulations and CMC distribution analysis for hFEB."
lead: "All in on Devourer: a statistical analysis of CMC distribution and Devourer activations through Monte Carlo simulations."
date: 2026-05-20T00:00:00+00:00
lastmod: 2026-05-20T00:00:00+00:00
draft: false
build:
  list: never
  render: always
---

## All In On Devourer

We have seen in this guide multiple ways of playing around graveyard hate, arguably the most effective way of sideboarding against us. Another form of interaction that also requires discussion is **burn**.

As an example, consider this real (approximate) board state from a recent game played in the Discord:

> The opponent is playing a BRG deck with a mountain open and a Bolt in hand (known thanks to a Therapy). The hFEB player just resolved that Therapy and pitched Palinchron for Shifter, with Devourer and a couple of unknowns in hand.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig1.png" alt="Board state: hFEB player about to combo with Shifter and Devourer, opponent has a Bolt" class="img-fluid rounded">
</div>

The hFEB player played Shifter as Palinchron, and the opponent Bolted it with the untap trigger on the stack — dealing 3 damage to Shifter and preventing the combo that turn (Devourer would have died to state-based actions with that 3 damage). The hFEB player waited until the opponent's upkeep, discarded Devourer for Triskelion, and pinged for lethal.

An **alternative line for the opponent** would have been to save the Bolt for later, betting that the hFEB player had only a single creature in hand (which he did). Without Triskelion and Devourer in hand, we have to fetch something with Devourer (either Triskelion or Akroma) to win: in that small window between pitching Devourer and resolving the Survival tutor, the opponent has a chance to wreck us.

Of course, as the FEB player, we could wait to draw a second creature and respond to any burn with a second Survival activation pitching Devourer for Triskelion. But here we assume we want to win this turn.

> **So, what are our odds?**

If we pitch Devourer to get Triskelion and the opponent Bolts Shifter in response, we need to activate Devourer to pump it so it survives. We need at least an accumulated 3 CMC to become a 4/4 and survive. But if we exile 6 CMC or more, the sacrifice trigger goes on the stack and we lose Shifter, significantly reducing our chances of winning. Beyond the sacrifice clause, another risk is exiling either Triskelion or Akroma during the process, which further hurts our chances of recovery.

How probable is it that Shifter survives the Bolt? How probable is it that we overshoot? What if it's a Shock instead of a Bolt? Double Shock? Bolt and Seal?

Let's run the numbers.

---

## Setting Up the Simulation

We start with the standard hFEB CMC distribution: **22 lands**, **13 one-drops** (Therapies, Birds, Unearths, Duress), **14 two-drops** (Wall of Roots, Survival, Hermits and others), **5 three-drops** (Shifters, Tog, Squee, ESG), **2 five-drops** (Karmic Guide and Scrounger), **2 six-drops** (Triskelion and Devourer), with Palinchron and Akroma at the tail end.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig2.png" alt="CMC histogram of standard hFEB deck" class="img-fluid rounded">
</div>

As a representative board state, assume we play 4 lands, a couple of 1-drops and 2-drops, Shifter and Devourer, leading to a 50-card library skewed toward the low end of the curve.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig3.png" alt="CMC histogram of 50-card library after removing played cards" class="img-fluid rounded">
</div>

---

## One Activation

To see what we should expect when activating Devourer once, we shuffle the library 10,000 times and look at the top card. The resulting histogram approximates the true probability distribution.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig4.png" alt="Probability of CMC after taking a single card from library" class="img-fluid rounded">
</div>

The highest probability is showing a land, which makes sense, since that is the most common CMC in the deck. Trying to survive a Bolt with a single activation is tricky: a 0, 1 or 2 CMC card is not enough, and that is the bulk of the distribution.

We'd need either a **3** or a **5 CMC** to survive without triggering the sacrifice clause, which happens around **12%** of the time (8% for a 3 CMC and 4% for a 5 CMC).

---

## Two Activations

Luckily, we are not limited to a single activation. The peak of the distribution shifts to the right: the more cards we exile, the higher the cumulative CMC.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig5.png" alt="Probability of CMC after taking two cards from library" class="img-fluid rounded">
</div>

Our chances of Shifter surviving a Bolt have now increased to **32%**, 16% probability of seeing a cumulative CMC of 3, 9% of 4, and 7% of 5.

---

## Multiple Activations: The Full Picture

These numbers are illustrative, but in a real game we are not limited to 1 or 2 activations. We keep activating Devourer until we reach a comfortable cumulative CMC.

In other words, we have a **minimum CMC** we aim to get (enough to survive whatever interaction is thrown at us) and a **maximum allowed CMC** (the upper bound, so we don't trigger the sacrifice). Running a million library permutations, in our Bolt example we need a minimum CMC of 3 to keep Shifter alive and a maximum CMC of 5 (since 6 would trigger the sacrifice). The probability of reaching that range is **77.1%**.

Under the same conditions:

- Survive a **Shock**: ~85%
- Survive **Lavamancer + Seal**: ~64%
- Survive **Bolt + Shock**: ~40%

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig6.png" alt="Probability of hitting a particular CMC range (colour-coded matrix)" class="img-fluid rounded">
</div>

---

## The Risk of Exiling Triskelion

It should be noted that just YOLOing it with Devourer is not the only way to go about this scenario. If we have mana open and some random cards in hand, we can stack activations until reaching the appropriate CMC (even if we overshoot) and discard a card through Shifter before activations resolve so the sacrifice never triggers. Getting Tog or Scrounger with the Survival trigger and pitching them for Triskelion would allow us to clean the graveyard and combo.

In that scenario, the only risk is **exiling Triskelion or Akroma during this process**, cutting our chances of finishing the game. The chance of exiling Triskelion when trying to survive a Bolt is around **6%**. Since the CMC of Triskelion is 6, exiling it and resolving that activation would trigger the sacrifice clause anyway — so Shifter wouldn't survive the Bolt. It follows that this 6% probability falls **outside** of the 77% chance of surviving Bolt.

<div class="text-center my-3">
<img src="/images/beyond-the-basics/CMC/Fig7.png" alt="Probability of exiling Triskelion when devouring for a specific CMC" class="img-fluid rounded">
</div>

In other words: of the 23% of times we won't survive Bolt, around 1 in 4 of those times we will exile Triskelion in the process. Similar math applies to Akroma.

---

> The numbers tell us that **Devourer activations are more resilient to burn than they feel**. With a representative library state, even a single Bolt threatens us only 23% of the time, and many of those scenarios still have outs through stacking activations or discarding through Shifter.
>
> Knowing the odds doesn't change the game, but it changes the **mindset**: when you commit to a Devourer-pump line under burn pressure, you are usually doing the right thing.
