// news-image-20261118 entry (Node 22, standard library only).
//
// The entry is a single picture: entry.png beside this file, a one-page
// newspaper front page that sums up Wednesday 18 November 2026 — the Gulf
// escalation, the Kerch Bridge, the Shenzhen summit, the Alaska Senate
// race, the Knesset vote, Ebola and measles. The picture was drawn for
// this bounty; this program only carries it to the grader's output.
//
// The grader runs the program twice with no network and both runs must
// write the same bytes, so this does the simplest deterministic thing:
// read the picture once and write those exact bytes to /output/entry.png.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The file is written byte for byte, so the second run matches the first.
const picture = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(outDir, 'entry.png'), picture);
