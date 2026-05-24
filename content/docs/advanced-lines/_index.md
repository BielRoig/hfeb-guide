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
<summary>Hermit Line Against Furnace</summary>
<div markdown="1">

Scrounger means you are no longer limited to a single avenue of lethal. Here is a line to deal with a Phyrexian Furnace using only Hermit Druid in play.

**Scenario:** Hermit Druid in play, opponent has Phyrexian Furnace with a mana up (or Withered Wretch).

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Karmic Guide<br>
</strong>Psychatog<br>
</strong>Battlefield Scrounger<br>
</strong>Wall of Roots<br>
</strong>Phyrexian Devourer<br>
</strong>Triskelion</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Triskelion" set="atq" />}}
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Wall of Roots" set="mir" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Karmic Guide" set="usg" />}}
</div>

**6 mana — 1 turn kill / 3 mana — 2 turn kill:**

1. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit on upkeep
2. Order graveyard: Guide, Tog, Scrounger, WoR, Devourer, Trike<br>
   *(if under 6 mana available, activate on opponent's EOT instead)*
3. Cast Krosan Reclamation to put two Shifters back in the library<br>
   *(if under 6 mana, do this on opponent's EOT)*
4. Draw Shifter and cast it. Opponent sees Guide trigger coming — if they exile Guide, Shifter enters as Tog and you pump for a lethal Akroma attack. Assuming they don't exile Guide...
5. Shifter enters as Guide and targets Guide. If opponent exiles Guide, Shifter becomes Tog. If they exile Tog instead, Guide enters and targets Triskelion. Use Shifter/Scrounger to put Scrounger + WoR + Akroma (15 CMC) into library. Combined with Shifter already in library = 18 CMC. Devourer on top — devour the whole library for 18 counters. Shoot opponent twice with Triskelion, shoot Triskelion to put it on top, deal the remaining 18 damage.
6. Assuming Tog enters, you now have Hermit, Shifter, Guide, and Tog in play. Check whether opponent has exiled any card up to now — if they have (and it wasn't Akroma), sac Tog to Therapy, pump, and attack for lethal. If Akroma was exiled, use Scrounger to put Palinchron + Squee + ESG (16 CMC) back. Next upkeep put Scrounger + WoR + WoR (25 CMC total) and FEB for lethal.
7. Assuming opponent still has Furnace up: Scrounge Palinchron + Akroma + ESG (21 CMC) and pass the turn. If opponent tries to exile anything, use Tog to reveal Devourer and kill with the 21 CMC. Otherwise on their upkeep, Scrounge Scrounger + Squee + WoR (10 more CMC) and attempt FEB kill.

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Survival & Shifter vs Multiple Graveyard Hate</summary>
<div markdown="1">

A Scrounger-based line that works around most graveyard hate without needing a second creature in hand. Requires Shifter to be non-summoning sick. The key idea: pitch Hermit Druid to Survival repeatedly until one resolves with Hermit still in the graveyard.

> ⚠️ If the opponent has more than four mana and Withered Wretch on the battlefield, committing to this line is not safe.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Battlefield Scrounger<br>
</strong>Psychatog<br>
</strong>Phyrexian Devourer</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Phyrexian Devourer" set="all" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}  
</div>

1. <i class="ms ms-g ms-cost"></i> *(If needed, discard a creature to Survival → get Hermit Druid)*
2. <i class="ms ms-g ms-cost"></i> Discard Hermit to Survival → get Triskelion. If Hermit is removed before Survival resolves, get another Hermit and repeat this step
3. Activate Shifter/Hermit and put Scrounger on top of graveyard
4. Activate Shifter/Scrounger to shuffle Scrounger + Akroma + Palinchron back into library (20 CMC)
5. Activate Shifter/Psychatog at least 3 times for a total +6/+6 pump. The opponent can use all the graveyard hate they want here — keep pumping in response until +6/+6 is achieved
6. Exile Psychatog + X cards to reveal Devourer (Shifter will have 7+ power, so sacrifice trigger goes on stack)
7. Activate Shifter/Devourer 3 times exiling Akroma + Palinchron + Scrounger for 20 counters total
8. <i class="ms ms-g ms-cost"></i> Discard Triskelion to Survival and shoot

> Every action in this line is part of an activation cost. The opponent has no window to meaningfully interact once the sequence begins. Pre-triggering the sacrifice clause guarantees all Devourer activations resolve above the sacrifice trigger — none can be blocked!

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

1. <i class="ms ms-g ms-cost"></i> *(If needed, discard a creature to Survival → get Hermit Druid)*
2. <i class="ms ms-g ms-cost"></i> Discard Hermit to Survival → get Triskelion
3. Activate Shifter/Hermit and put Battlefield Scrounger on top of graveyard
4. Activate Shifter/Scrounger to shuffle Scrounger + Akroma + Palinchron back into library (20 CMC)
5. Activate Shifter/Devourer, letting each trigger resolve before the next. If opponent activates Crypt here, spend <i class="ms ms-1 ms-cost"></i><i class="ms ms-g ms-cost"></i> to cast Krosan Reclamation and put Karmic Guide + Squee (8 CMC) in library, then activate Shifter/Devourer again to reach lethal
6. <i class="ms ms-g ms-cost"></i> Discard Triskelion to Survival and shoot

> Scrounger's library-filling is part of the activation cost — the opponent cannot prevent those cards from going back. There is no relevant window for the opponent to use a single Furnace or Crypt to stop this sequence.

</div>
</details>

<details class="collapsible-hero collapsible-hero--survival line-polished">
<summary>Shifter Kill with Infinite Pump</summary>
<div markdown="1">

With Survival of the Fittest and Volrath's Shapeshifter in play, Battlefield Scrounger enables an infinite pump loop. Useful against decks that can generate infinite life or otherwise block a normal hFEB kill. This line does not exile deck cards like Tog or Devourer, keeping your options open for future turns.

> ⚠️ **Rules note:** This line involves activating Wall of Roots multiple times via Shifter. See the [Rules](/docs/beyond-the-basics/rules/) page for full details on the legality of this interaction.

<div class="card-row card-row--stack">
{{< scryfall-card name="Survival of the Fittest" set="exo" />}}
{{< scryfall-card name="Volrath's Shapeshifter" set="str" />}}
{{< scryfall-card name="Battlefield Scrounger" set="ody" />}}
{{< scryfall-card name="Wall of Roots" set="mir" />}}
</div>

1. <i class="ms ms-g ms-cost"></i> Discard WoR#1 to Survival → get Scrounger
2. Activate Shifter/WoR#1 to add <i class="ms ms-g ms-cost"></i>, use that mana to pitch Scrounger to Survival
3. <i class="ms ms-g ms-cost"></i> Discard Scrounger to Survival: **in response** to the Survival trigger, activate Shifter/Scrounger to put Scrounger + 2 more cards back into the library
4. Shifter becomes WoR#1 again, gets a +3/+3 pump from Scrounger (with the 0/-1 counter = +3/+2 total pump)
5. Resolve Survival trigger → get WoR#2 in hand
6. Activate Shifter/WoR#1 to add <i class="ms ms-g ms-cost"></i>
7. <i class="ms ms-g ms-cost"></i> Discard WoR#2 to Survival → get WoR#3
8. Activate Shifter/WoR#2 to add <i class="ms ms-g ms-cost"></i>
9. <i class="ms ms-g ms-cost"></i> Discard WoR#3 to Survival → get Scrounger
10. Activate Shifter/WoR#3 to add <i class="ms ms-g ms-cost"></i>
11. <i class="ms ms-g ms-cost"></i> Discard Scrounger to Survival: **in response**, activate Shifter/Scrounger to put Scrounger + WoR#1 + WoR#2 back into library
12. Shifter becomes WoR#1 again, gets +3/+3 pump (with 3× 0/-1 counters = +3/+0 total pump)

From here resolve the Survival trigger getting WoR#2 — you are back to step 1. Repeat for infinite pump.

> The initial steps give Shifter a toughness cushion to survive subsequent pumps. The reason is that when pitching Scrounger you have already accumulated 3× (0/-1) counters, so you need extra toughness before the +3/+3 resolves.

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

Aura Thief can beat Solitary Confinement and most other Enchantress locks. This is a pass-the-turn line that steals all enchantments the opponent controls before proceeding with normal combo lines.

<p class="graveyard-order"><strong>Graveyard order (top to bottom):<br>
</strong>Karmic Guide<br>
</strong><em>(Wall of Roots × 2)</em><br>
</strong>Aura Thief</p>

<div class="card-row card-row--stack">
{{< scryfall-card name="Hermit Druid" set="tmp" />}}
{{< scryfall-card name="Volrath's Shapeshifter" set="str" />}}
{{< scryfall-card name="Unearth" set="uds" />}}
{{< scryfall-card name="Karmic Guide" set="usg" />}}
{{< scryfall-card name="Psychatog" set="ody" />}}
{{< scryfall-card name="Cabal Therapy" set="ody" />}}
{{< scryfall-card name="Aura Thief" set="uds" />}}
</div>

**Line A:**

1. <i class="ms ms-g ms-cost"></i><i class="ms ms-tap ms-cost"></i> Activate Hermit Druid and put Karmic Guide on top of graveyard<br>
   *(use Krosan Reclamation if no reanimation spell in hand)*
2. <i class="ms ms-b ms-cost"></i> Cast Unearth targeting Shapeshifter
3. Shifter/Guide enters and targets Guide itself
4. Guide enters and targets Aura Thief
5. Sacrifice Aura Thief with Cabal Therapy — Aura Thief triggers and you gain control of all opponent's enchantments
6. Pass the turn
7. On your upkeep Guide dies (Echo not paid)
8. <i class="ms ms-b ms-cost"></i> Cast second Unearth targeting second Shapeshifter
9. Shifter/Guide enters and targets Guide itself
10. Guide enters and targets Tog
11. Use Tog to clean top of graveyard and reveal Aura Thief
12. Sacrifice first Shifter/Thief to Cabal Therapy
13. Kill with Shifter/Akroma or Scrounger/Trike line

**Line B (with Wall of Roots in graveyard pile):**

Steps 1–3 are the same as Line A through Shifter/Guide targeting Guide, Guide targeting Psychatog.

4. Remove Unearth from top of graveyard, leave: WoR → WoR → Aura Thief
5. Pass the turn. During opponent's draw step: activate Shifter/Wall, remove Wall#1 with Tog, activate Shifter/Wall, remove Wall#2 with Tog, let Shifter/Thief die to state-based action → steal all enchantments
6. Untap and proceed as Line A

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
