---
title: "Test Flowchart"
description: "A simple test to verify the interactive flowchart wizard works."
layout: "flowchart"
favorability: "even"
date: 2026-05-19T00:00:00+00:00
draft: false
_build:
  list: never
  render: always
start: "start"
steps:
  start:
    text: "Welcome! This is a test flowchart. Do you have Hermit Druid in play?"
    short: "Start"
    choices:
      - label: "Yes, Hermit Druid is in play"
        next: "activate-hermit"
      - label: "No, I don't have it yet"
        next: "no-hermit"
  activate-hermit:
    text: "Great! Activate Hermit Druid. Does the opponent have graveyard hate?"
    short: "Activate Hermit"
    choices:
      - label: "No, opponent has nothing"
        next: "win"
      - label: "Yes, Tormod's Crypt"
        next: "tormod-crypt"
  tormod-crypt:
    text: "Tormod's Crypt is one-shot hate. You can still win — pump Shifter/Psychatog above the hate window."
    short: "Tormod's Crypt"
    choices:
      - label: "Continue to lethal"
        next: "win"
  no-hermit:
    text: "You need to find Hermit Druid first. Use Survival of the Fittest or wait for the next draw."
    short: "No Hermit"
    type: "failure"
  win:
    text: "🎉 You have lethal! Resolve the kill."
    short: "Win"
    type: "success"
---

{{< flowchart >}}
