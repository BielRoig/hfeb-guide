---
title: "Battlefield Scrounger Lines"
description: "Advanced lines using Battlefield Scrounger in Hermit Full English Breakfast."
lead: "A focused look at Battlefield Scrounger as a recursion engine and inevitability tool."
date: 2026-05-05T00:00:00+00:00
lastmod: 2026-05-05T00:00:00+00:00
draft: false
---

## Hermit Kill with Devourer — 20 Damage

If you can't go into combat to kill with Akroma, you can still use Hermit and shoot with Triskelion. If you need more than 20 damage, use Animate Dead to bring back two Shifters and shuffle more cards back into the library.

**Graveyard order (top to bottom):** Karmic Guide → Battlefield Scrounger → Phyrexian Devourer → Triskelion

<div class="card-row">
{{< card name="Hermit Druid" set="tmp" >}}
{{< card name="Volrath's Shapeshifter" set="str" >}}
{{< card name="Unearth" set="uds" >}}
{{< card name="Karmic Guide" set="usg" >}}
{{< card name="Psychatog" set="ody" >}}
{{< card name="Battlefield Scrounger" set="ody" >}}
{{< card name="Phyrexian Devourer" set="all" >}}
{{< card name="Triskelion" set="atq" >}}
</div>

1. Activate Hermit Druid and put Karmic Guide on top of your graveyard
2. Cast Unearth targeting Shapeshifter
3. Shifter enters as Guide and targets Guide itself *(if you need an extra body for Therapy)*
4. Shifter/Guide enters and targets Psychatog
5. Remove Unearth + Guide with Psychatog to reveal Scrounger on top of graveyard
6. Activate Shifter/Scrounger to shuffle Scrounger + Palinchron + Akroma back into the library (20 CMC)
7. Reveal Devourer on top of graveyard
8. Activate Shifter/Devourer 3 times
9. Remove Devourer with Psychatog to reveal Triskelion on top of graveyard
10. Shoot the opponent with Shifter/Triskelion

---

## Hermit Kill with Devourer (no Psychatog) — 36 Damage

Probably the highest amount of damage achievable with 2 reanimation spells in a Scrounger line.

**Graveyard order (top to bottom):** Karmic Guide → Phyrexian Devourer

<div class="card-row">
{{< card name="Hermit Druid" set="tmp" >}}
{{< card name="Volrath's Shapeshifter" set="str" >}}
{{< card name="Unearth" set="uds" >}}
{{< card name="Karmic Guide" set="usg" >}}
{{< card name="Battlefield Scrounger" set="ody" >}}
{{< card name="Triskelion" set="atq" >}}
{{< card name="Phyrexian Devourer" set="all" >}}
{{< card name="Cabal Therapy" set="ody" >}}
</div>

1. Activate Hermit Druid and put Karmic Guide on top of your graveyard
   *(If no second reanimation spell, use Krosan Reclamation to put two on top of library during upkeep or opponent's EOT)*
2. Cast Unearth targeting Shapeshifter
3. Shifter/Guide enters and targets Guide itself
4. Guide enters and targets Triskelion
5. Activate Scrounger to shuffle Palinchron + Akroma + Squee back into library (18 CMC)
6. Sacrifice Guide and Scrounger with Cabal Therapy (Scrounger on top)
7. Cast second Unearth targeting second Shapeshifter
8. Shifter/Guide enters and targets Guide itself
9. Guide enters and targets Triskelion
10. Activate Shifter/Scrounger to shuffle Unearth + Guide + Survival back into library (8 CMC)
11. Activate Shifter/Scrounger to shuffle Unearth + Scrounger + ESG back into library (9 CMC)
12. Reveal Devourer on top of graveyard
13. Activate Shifter/Devourer 10 times (9 from Scrounger + 1 from Krosan Rec)
14. Activate Triskelion dealing 2 damage to opponent and 1 to itself
15. Triskelion dies and goes on top of graveyard
16. Shoot with Shifter/Triskelion for 36 damage

---

## Shifter Kill with Infinite Pump

With Survival of the Fittest and Volrath's Shapeshifter in play, Battlefield Scrounger enables an infinite pump loop. Useful against decks that can generate infinite life or otherwise block a normal hFEB kill. This line does not exile deck cards like Tog or Devourer, keeping your options open for future turns.

> ⚠️ **Rules note:** This line involves activating Wall of Roots multiple times via Shifter. See the [Rules Disclaimer](/docs/matchups/#rules-disclaimer) for full details on the legality of this interaction.

<div class="card-row">
{{< card name="Survival of the Fittest" set="exo" >}}
{{< card name="Volrath's Shapeshifter" set="str" >}}
{{< card name="Battlefield Scrounger" set="ody" >}}
{{< card name="Wall of Roots" set="mir" >}}
</div>

1. Discard WoR#1 to Survival → get Scrounger
2. Activate Shifter/WoR#1 to add {G}, use that mana to pitch Scrounger to Survival
3. Discard Scrounger to Survival: **in response** to the Survival trigger, activate Shifter/Scrounger to put Scrounger + 2 more cards back into the library
4. Shifter becomes WoR#1 again, gets a +3/+3 pump from Scrounger (with the 0/-1 counter = +3/+2 total pump)
5. Resolve Survival trigger → get WoR#2 in hand
6. Activate Shifter/WoR#1 to add {G}
7. Discard WoR#2 to Survival → get WoR#3
8. Activate Shifter/WoR#2 to add {G}
9. Discard WoR#3 to Survival → get Scrounger
10. Activate Shifter/WoR#3 to add {G}
11. Discard Scrounger to Survival: **in response**, activate Shifter/Scrounger to put Scrounger + WoR#1 + WoR#2 back into library
12. Shifter becomes WoR#1 again, gets +3/+3 pump (with 3× 0/-1 counters = +3/+0 total pump)

From here resolve the Survival trigger getting WoR#2 — you are back to step 1. Repeat for infinite pump.

> The initial steps give Shifter a toughness cushion to survive subsequent pumps. The reason is that when pitching Scrounger you have already accumulated 3× (0/-1) counters, so you need extra toughness before the +3/+3 resolves.

---

## Shifter Kill with Library Rescue

A finite but large pump that also reshuffles most of your graveyard back into the library. Compared to the infinite line, it only requires a single Wall of Roots instead of three — useful as a backup when two Walls have been exiled.

**Graveyard order (top to bottom):** Wall of Roots

> ⚠️ **Rules note:** See the [Rules Disclaimer](/docs/matchups/#rules-disclaimer) for details on the legality of activating Wall of Roots multiple times via Shifter.

<div class="card-row">
{{< card name="Survival of the Fittest" set="exo" >}}
{{< card name="Hermit Druid" set="tmp" >}}
{{< card name="Volrath's Shapeshifter" set="str" >}}
{{< card name="Battlefield Scrounger" set="ody" >}}
{{< card name="Wall of Roots" set="mir" >}}
</div>

1. *(Discard a creature to Survival → get Scrounger)*
2. Activate Hermit and put Wall of Roots on top
3. Activate Shifter/WoR to add {G}
4. Discard Scrounger to Survival: **in response**, activate Shifter/Scrounger and shuffle itself + 2 more cards for a total +3/+2 pump
5. Resolve Survival trigger → get Scrounger itself. Back to step 1.

This loop produces a **+1.5/+1 pump per card in the graveyard** — 3× more efficient than Psychatog and without exiling cards. For a 40-card graveyard this leads to a +50 pump.

> Note: positive Scrounger pumps last until EOT while negative counters are permanent. Have a plan for when Shifter dies at end of turn.
