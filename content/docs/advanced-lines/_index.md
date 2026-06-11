---
title: "Advanced Lines"
description: "Complex hFEB lines involving Battlefield Scrounger and unusual interactions."
lead: "Complex lines involving Battlefield Scrounger and other unusual interactions within the deck."
date: 2026-05-20T00:00:00+00:00
lastmod: 2026-05-20T00:00:00+00:00
draft: false
---

In this section, you will find more complex lines involving Battlefield Scrounger and other unusual interactions within the deck.

Some of these lines depend on very specific timing, graveyard ordering, or rules interactions. If a line includes a Rules Disclaimer, it means that the interaction is still being discussed or has not yet received a final, universally accepted ruling — especially regarding how Volrath's Shapeshifter interacts with multiple abilities that can only be activated once per turn.

---

<details class="collapsible-hero line-polished">
<summary>Hermit vs Phyrexian Furnace</summary>
<div markdown="1">

Scrounger means you are no longer limited to a single avenue of lethal. Here is a line to deal with a Phyrexian Furnace using only Hermit Druid in play.

**Scenario:** Hermit Druid in play, opponent has Phyrexian Furnace with a mana up (or Withered Wretch).

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Karmic Guide<br>
</strong>Psychatog<br>
</strong>Battlefield Scrounger<br>
</strong>Phyrexian Devourer<br>
</strong>Triskelion</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Triskelion" set="atq" />}}
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Karmic Guide" set="usg" />}}
</div>

**6 mana — 1 turn kill / 3 mana — 2 turn kill:**

1. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit on upkeep
2. Order graveyard: Guide, Tog, Scrounger, Devourer, Trike<br>
   *(if under 6 mana available, activate on opponent's EOT instead)*
3. <i class="ms ms-1 ms-cost"></i><i class="ms ms-g ms-cost"></i>Cast Krosan Reclamation targeting two Shapeshifter<br>
   *(if under 6 mana, do this on opponent's EOT)*
4. Draw Shifter and <i class="ms ms-1 ms-cost"></i><i class="ms ms-u ms-cost"></i><i class="ms ms-u ms-cost"></i>cast it. Opponent sees Guide trigger coming: if they exile Guide, Shifter enters as Tog and you pump for a lethal Akroma attack. Assuming they don't exile Guide...
5. Shifter enters as Guide and targets Guide. If opponent exiles Guide, Shifter becomes Tog. If they exile Tog instead, Guide enters and targets Triskelion. Use Shifter/Scrounger to put Scrounger + Squee + Akroma (16 CMC) into library. Combined with Shifter already in library = 19 CMC. With Devourer on top, activate Shifter/Deevourer to exile the whole library for 19 counters. Shoot opponent twice with Triskelion, shoot Triskelion to put it on top, deal the remaining 19 damage.
6. Assuming Tog enters, you now have Hermit, Shifter, Guide, and Tog in play. Check whether opponent has exiled any card up to now: if they have (and it wasn't Akroma), sac Tog to Therapy, pump, and attack for lethal. If Akroma was exiled, use Scrounger to put Palinchron + Squee + ESG (16 CMC) back. Next upkeep put Scrounger + WoR + WoR (25 CMC total) and FEB for lethal.
7. Assuming opponent still has Furnace up: Scrounge Palinchron + Akroma + ESG (21 CMC) and pass the turn. If opponent tries to exile anything, use Tog to reveal Devourer and kill with the 21 CMC. Otherwise on their upkeep, Scrounge Scrounger + Squee + WoR (10 more CMC) and attempt FEB kill.

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Survival & Shifter vs Multiple Graveyard Hate</summary>
<div markdown="1">

A Scrounger-based line that works around most graveyard hate without needing a second creature in hand. Requires Shifter to be non-summoning sick. The key idea: pitch Hermit Druid to Survival repeatedly until one resolves with Hermit still in the graveyard.

> ⚠️ If the opponent has more than four mana and Withered Wretch, committing to this line is not 100% safe.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Battlefield Scrounger<br>
</strong>Psychatog<br>
</strong>Phyrexian Devourer</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}  
</div>

1. *(<i class="ms ms-g ms-cost"></i> discard a creature to Survival to get Hermit Druid)*
2. <i class="ms ms-g ms-cost"></i> Discard Hermit to Survival
3. Get Triskelion<br>
   *(If Hermit is removed before Survival resolves, get another Hermit and repeat this step)*
5. Activate Shifter/Hermit and put Scrounger on top of graveyard
6. Activate Shifter/Scrounger to shuffle Scrounger + Akroma + Palinchron back into library (20 CMC)
7. Let the +3/+3 pump from Scrounger resolve
8. Activate Shifter/Psychatog at least 3 times for a total +6/+6 pump. The opponent can use all the graveyard hate they want here: **keep pumping in response until +6/+6 is achieved**
9. Exile Psychatog and another card to reveal Devourer
10. **Shifter/Devourer will have 7+ power, so the Devourer sacrifice trigger goes on stack**
11. Activate Shifter/Devourer 3 times exiling Akroma + Palinchron + Scrounger for 20 counters total
12. <i class="ms ms-g ms-cost"></i> Discard Triskelion to Survival and shoot

> Every action in this line is part of an activation cost. The opponent has no window to meaningfully interact once the sequence begins. Pre-triggering the sacrifice clause guarantees all Devourer activations resolve above the sacrifice trigger — none can be [covered](/docs/beyond-the-basics/activation-covering/)!

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Survival & Shifter vs Tormod's Crypt — without Tog</summary>
<div markdown="1">

With a non-summoning sick Shapeshifter and Survival of the Fittest, you can generate a hate-proof chain that wins cleanly. This line works against any one-shot graveyard hate and requires 5 mana.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Battlefield Scrounger<br>
</strong>Phyrexian Devourer</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Krosan Reclamation" set="ody" />}}
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
</div>

1. *(<i class="ms ms-g ms-cost"></i> discard a creature to Survival to get Hermit Druid)*
2. <i class="ms ms-g ms-cost"></i> Discard Hermit to Survival
3. Get Triskelion
3. <i class="ms ms-g ms-cost"></i> Activate Shifter/Hermit
4. Put Battlefield Scrounger on top of graveyard
5. Activate Shifter/Scrounger to shuffle Scrounger + Akroma + Palinchron back into library (20 CMC)
6. Activate Shifter/Devourer, letting each trigger resolve before the next. If opponent activates Crypt here, spend <i class="ms ms-1 ms-cost"></i><i class="ms ms-g ms-cost"></i> to cast Krosan Reclamation and put Karmic Guide + Squee (8 CMC) in library, then activate Shifter/Devourer again to reach lethal
7. <i class="ms ms-g ms-cost"></i> Discard Triskelion to Survival and shoot

> Scrounger's library-filling is part of the activation cost, so the opponent cannot prevent those cards from going back. There is no relevant window for the opponent to use a single Furnace or Crypt to stop this sequence.

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Infinite Power Line</summary>
<div markdown="1">

With Survival of the Fittest and two Volrath's Shapeshifters in play, Battlefield Scrounger enables an infinite pump loop. Useful against decks that can generate infinite life or otherwise block a normal hFEB kill. This line does not exile deck cards like Tog or Devourer, keeping your options open for future turns.

<div class="card-row card-row--stack">
{{< scryfall-card name="Survival of the Fittest" set="exo" />}}
{{< scryfall-card name="Volrath's Shapeshifter" set="str" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Wall of Roots" set="mir" />}}
</div>

Start with two Shifters in play, Survival in play, WoR in hand and a creature with toughness 3+ top of graveyard (WoR or Pali - NOT Akroma as Shifters will die to the Legend rule).

1. <i class="ms ms-g ms-cost"></i> Discard WoR#1 to Survival → get Wor#2
2. Shifter1 produces <i class="ms ms-g ms-cost"></i>  (which we abbreviate as S1-><i class="ms ms-g ms-cost"></i> ). The P/T increments of both Shifters are now [0/-1] and [0/0]. We have <i class="ms ms-g ms-cost"></i>  in our pool.
3. Use <i class="ms ms-g ms-cost"></i>  to pitch WoR2 to get Battlefield Scrounger (BS).
4. S1-><i class="ms ms-g ms-cost"></i> , S2-><i class="ms ms-g ms-cost"></i> , [0/-2, 0/-1], <i class="ms ms-g ms-cost"></i> <i class="ms ms-g ms-cost"></i>  in pool
5. Use <i class="ms ms-g ms-cost"></i>  to pitch BS. In response use S1 to scrounge WoR1, WoR2 and BS. Let 3/3 pump resolve and get WoR1 from library. [3/1, 0/-1]. <i class="ms ms-g ms-cost"></i>  in pool.
6. Pitch WoR1 for WoR2
7. S1-><i class="ms ms-g ms-cost"></i> , [3/0, 0/-1], <i class="ms ms-g ms-cost"></i>  in pool.
8. Pitch WoR2 for BS
9. S1-><i class="ms ms-g ms-cost"></i> , S2-><i class="ms ms-g ms-cost"></i> , [3/-1, 0/-2], <i class="ms ms-g ms-cost"></i> <i class="ms ms-g ms-cost"></i>  in pool.
10. Pitch BS, scrounge top 3 cards with S2, let pump resolve and get WoR1. [3/-1, 3/1].
11. Pitch WoR1 for WoR2
12. S2-><i class="ms ms-g ms-cost"></i> , [3/-1, 3/0], <i class="ms ms-g ms-cost"></i>  in pool.
13. Pitch WoR2 for BS
14. S1-><i class="ms ms-g ms-cost"></i> , S2-><i class="ms ms-g ms-cost"></i> , [3/-2, 3/-1], <i class="ms ms-g ms-cost"></i> <i class="ms ms-g ms-cost"></i>  in pool.
15. Pitch BS, scrounge top 3 cards with S1, get WoR1. [6/1, 3/-1]. G in the pool. Go back to step 6.

> Every round toughness increments oscillate from -1 to 1 and viceversa and we get +3 on power on one or the other Shifter. Final result are two [inf, +-1] Shifters (but only one Shifter/Akroma will survive).


> If you have hermit druid in play at the start of the line (or top of graveyard), you can activate it to make the Shifters a Tog and pump them to guarantee them surviving all the negative counters along the line (makes math easier). You can also use the AD+Karmic Guide tech to bring two shifters into play and set up the board for the infinite line.

> To use this line for combat, in step 10 use Scrounger to put Scrounger, Akroma and WoR1 into the library and get WoR1. Use the last <i class="ms ms-g ms-cost"></i> in the pool to pitch WoR1 for Akroma and use both Shifters to add <i class="ms ms-g ms-cost"></i><i class="ms ms-g ms-cost"></i> to the pool. Finally use <i class="ms ms-g ms-cost"></i> to pitch Akroma to get Scrounger. One of the Shifters must die to the legend rule, choose the one with the [X/-2] P/T delta, and a single Shifter will remain with a [X/0] P/T Delta. Use the last <i class="ms ms-g ms-cost"></i> to pitch Scrounger and in response put Scrounger, the top Shifter and something else in the library, revealing Akroma and attack for lethal.

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Shifter Kill with Library Rescue</summary>
<div markdown="1">

A finite but large pump that also reshuffles most of your graveyard back into the library. Compared to the infinite line, it only requires a single Wall of Roots instead of three — useful as a backup when two Walls have been exiled.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Wall of Roots</p>

> ⚠️ **Rules note:** See the [Rules](/docs/beyond-the-basics/rules/) page for details on the legality of activating Wall of Roots multiple times via Shifter.

<div class="card-row card-row--stack">
{{< scryfall-card name="Survival of the Fittest" set="exo" />}}
{{< scryfall-card name="Hermit Druid" set="tmp" />}}
{{< scryfall-card name="Volrath's Shapeshifter" set="str" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Wall of Roots" set="mir" />}}
</div>

1. <i class="ms ms-g ms-cost"></i> *(Discard a creature to Survival → get Scrounger)*
2. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit and put Wall of Roots on top
3. Activate Shifter/WoR to add <i class="ms ms-g ms-cost"></i>
4. <i class="ms ms-g ms-cost"></i> Discard Scrounger to Survival: **in response**, activate Shifter/Scrounger and shuffle itself + 2 more cards for a total +3/+2 pump
5. Resolve Survival trigger → get Scrounger itself. Back to step 1.

This loop produces a **+1.5/+1 pump per card in the graveyard** — 3× more efficient than Psychatog and without exiling cards. For a 40-card graveyard this leads to a +50 pump.

> Note: positive Scrounger pumps last until EOT while negative counters are permanent. Have a plan for when Shifter dies at end of turn.

</div>
</details>

<details class="collapsible-hero line-polished">
<summary>Aura Thief vs Enchantress Lock</summary>
<div markdown="1">

Aura Thief can beat Solitary Confinement and most other Enchantress locks.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Karmic Guide<br>
</strong>Aura Thief</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Cabal Therapy" set="ody" />}}
{{< scryfall-card name="Aura Thief" set="uds" />}}
{{< scryfall-card name="Karmic Guide" set="usg" />}}
</div>

1. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit Druid
2. *(If you are in your upkeep <i class="ms ms-1 ms-cost"></i><i class="ms ms-g ms-cost"></i> cast Krosan Reclamation and shuffle Animate Dead in the deck and go to draw step)*
2. <i class="ms ms-1 ms-cost"></i><i class="ms ms-b ms-cost"></i> Cast Animate Dead targeting Shapeshifter
3. Guide targets Shapeshifter and both Guide and Animate Dead triggers go on the stack
4. Animate Dead trigger has to resolve first, so that Guide will go back to the graveyard on top of the Animate Dead
5. Shifter/Guide enters and targets Shifter #2
6. Shifter/Guide #2 enters and targets Guide itself
7. Guide enters and targets Psychatog
8. Use Psychatog to clean the top of graveyard and reveal Aura Thief
9. Sacrifice Shifter/Thief #1 with Cabal Therapy
10. **Aura Thief triggers and you gain control of all the enchantments your opponent control**
11. At this point you have both Shifter and Psychatog in play
12. Kill with the Shifter/Akroma or the Scrounger/Trike line

> This line can also be a pass-the-turn line if you want to play around enchantment removal. In this case you shuffle two Unearth in the deck and you *reanimate* Aura Thief with the first one and then sacrifice it with Cabal Therapy.

</div>
</details>

<!--<details class="collapsible-hero line-polished">
<summary>Hermit Kill with Devourer (no Psychatog) — 36 Damage</summary>
<div markdown="1">

Probably the highest amount of damage achievable with 2 reanimation spells in a Scrounger line.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Karmic Guide<br>
</strong>Phyrexian Devourer</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Hermit Druid" set="tmp" />}}
{{< scryfall-card name="Volrath's Shapeshifter" set="str" />}}
{{< scryfall-card name="Unearth" set="uds" />}}
{{< scryfall-card name="Karmic Guide" set="usg" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Triskelion" set="atq" />}}
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Cabal Therapy" set="ody" />}}
</div>

1. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit Druid and put Karmic Guide on top of your graveyard<br>
   *(if no second reanimation spell, use Krosan Reclamation to put two on top of library during upkeep or opponent's EOT)*
2. <i class="ms ms-b ms-cost"></i> Cast Unearth targeting Shapeshifter
3. Shifter/Guide enters and targets Guide itself
4. Guide enters and targets Triskelion
5. Activate Scrounger to shuffle Palinchron + Akroma + Squee back into library (18 CMC)
6. Sacrifice Guide and Scrounger with Cabal Therapy (Scrounger on top)
7. <i class="ms ms-b ms-cost"></i> Cast second Unearth targeting second Shapeshifter
8. Shifter/Guide enters and targets Guide itself
9. Guide enters and targets Triskelion
10. Activate Shifter/Scrounger to shuffle Unearth + Guide + Survival back into library (8 CMC)
11. Activate Shifter/Scrounger to shuffle Unearth + Scrounger + ESG back into library (9 CMC)
12. Reveal Devourer on top of graveyard
13. Activate Shifter/Devourer 10 times (9 from Scrounger + 1 from Krosan Rec)
14. Activate Triskelion dealing 2 damage to opponent and 1 to itself
15. Triskelion dies and goes on top of graveyard
16. Shoot with Shifter/Triskelion for 36 damage

</div>
</details>-->
