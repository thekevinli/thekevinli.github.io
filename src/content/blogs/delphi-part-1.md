---
title: 'Delphi [part 1]: Designing a self-improving memory harness'
description: 'A research assistant that knows what you know starts with a memory, and with an eval reliable enough for agents to improve it.'
draft: true
links:
  - label: Delphi on GitHub
    href: https://github.com/thekevinli/delphi
---

Here is the paradox of working with agents. The more you delegate, the more your fundamentals matter, because you cannot supervise what you do not understand.

Yet reading papers by hand is slow, and pasting one into a chat window gets you generic fluff, because the model has no idea what you already know. I want something closer to a colleague who remembers what I have read and builds the answer on top of it.

This series builds that in three steps: understand faster, keep up, and run experiments. Part 1 is about the first, and it starts with knowing what you already know.

## Delphi in two minutes

<figure>
  <a href="https://www.youtube.com/watch?v=u8ALOOZ988k"><img src="../../images/delphi-demo.webp" alt="Delphi demo video" loading="lazy" /></a>
  <figcaption>The two-minute demo, on YouTube.</figcaption>
</figure>

Delphi files everything you read into a memory wiki and reads that wiki before it answers. Open a new paper and it skips what you have already read, and spends its words on what is new to you.

The app is covered in the [repository](https://github.com/thekevinli/delphi) and the demo. This post is about what made it work: the eval.

## The eval is the ladder

Give an agent a quantifiable proxy and it will climb it. Give it a vague one and you get garbage in, garbage out. So before tuning the harness, we built rigs that score the memory itself, offline, against answers a person has reviewed.

| Rig | What it scores |
| --- | --- |
| `memory_eval` | Whether memory pages are sound and match reviewed answer keys, with no model call. |
| `memory_rebuild` | A whole wiki refiled from scratch by the shipped pipeline, then scored against a reviewed key. |
| `chat_benchmark` | Questions sent through the real chat path, once per configuration, graded against reviewed facts. |
| `digest_model_benchmark` | One fixed, stratified sample of documents through two model configurations. |

<aside>Each arm is named by a shipped configuration, never a bare model string, so a result maps to something people actually run.</aside>

Every rig runs in a store or account of its own, so a comparison never touches live memory.

## What climbed, and what did not

<div class="placeholder">[Results to add] Each technique tried, and its effect on the memory eval, the rebuild score and the chat benchmark.</div>

Part 2 makes the memory proactive. Instead of waiting for a question, Delphi tells you what a new paper adds to what you know.
