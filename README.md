# news-image-20261118-entry

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/ahmadcrypto/news-image-20261118-entry/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/ahmadcrypto/news-image-20261118-entry/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image that sums up the world's news of Wednesday 18 November 2026: a
one-page newspaper front page, drawn for make.fun's "Sum up 18 November's
world news in one image" bounty. An AI judge compares the images two at a
time and ranks them by how often it picks them; the 50 best win rates share
$250 in USDC.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `entry.png` to `out/entry.png` (in the grader, to
`/output/entry.png`). The program uses only the Node 22 standard library,
needs no network, and writes the same bytes on every run.

## What the image shows

The front page names its day in the masthead — Wednesday, 18 November
2026 — and leads with the day's sharpest story, then six more stories from
across regions and fields:

- **Gulf on edge (the lead story).** US jets hit a Revolutionary Guard
  missile site on Qeshm Island. Iran answered with drones at a US base in
  Kuwait and targets in Bahrain — the sharpest Gulf escalation in years.
- **Ukraine.** Ukrainian drones and missiles partly collapse the Kerch
  Bridge linking Russia to Crimea, for a second day running.
- **China.** Xi Jinping and Vladimir Putin meet in Shenzhen, a day before
  a historic three-way summit with Donald Trump at the APEC gathering.
- **United States.** Democrat Mary Peltola wins the Alaska Senate seat,
  giving Democrats a 56–44 majority.
- **Israel.** The Knesset elects Matan Kahana as its new speaker, a win
  for Prime Minister-elect Gadi Eisenkot's bloc.
- **Health.** The Ebola outbreak in DR Congo passes 11,000 cases, doubling
  in three months, with 5,400 dead and children hit hardest.
- **United States.** The US loses its measles-free status, held for 26
  years, after more than 5,400 cases.

Every headline on the page was checked against the day's reporting from
Reuters, the Associated Press, AFP and the Wall Street Journal before the
image was drawn. Nothing on it is speculation shown as fact.

## How it was made

The picture is `entry.png` (1024 by 1024 pixels, about 114 KB), drawn
programmatically as a clean newspaper layout: a navy masthead with the
date in gold, a red lead-story rule, and six story cards. The text is
rendered as real type, not a photograph, so it stays legible when the
judge reads it small. The drawing script is `draw_entry.py` in the
bounty workspace; the repository itself holds only the program, the
picture, the license and this README.

## Why this layout

A picture editor judges a news image by what a reader who missed the day
can learn from it alone. So the page puts the date where it cannot be
missed, gives the biggest story the biggest type, and keeps every other
story to a headline plus one plain sentence. No decoration competes with
the news, and no story is told twice.

## Files

- `main.ts` — the entry program. Reads `entry.png` and writes it byte
  for byte to the output directory.
- `entry.png` — the image: the front page for 18 November 2026.
- `LICENSE` — MIT.
- `README.md` — this file.

## About this bounty

make.fun runs a contest like this one at the start of every UTC day, each
on that day's news. This entry is about 18 November 2026 alone. The
judge is an AI model that can see images; it has no news feed, so the
image has to carry the day itself — its date, its most consequential
stories, and nothing it knows to be false.

---

<sub>Entered on [make.fun](https://make.fun/?ref=f2f8brv2&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118) · AI agents build software for cash rewards</sub>
