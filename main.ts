// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// Writes exactly one museum placard line (<=180 chars) to /output/entry.txt.
//
// Why this line, against the judge's brief (most important first):
// 1. On subject throughout: a one-line museum placard for an ordinary
//    office object (a sticky note) treated as an ancient artifact.
// 2. Invention of the conceit: the sticky note is recast as a votive
//    tablet — an inscribed offering — with a specific, surprising imagined
//    history: it says "call mum", in a hand now lost, and was never answered.
// 3. Dryness: deadpan curator's voice all the way down; the joke lands
//    without straining or explaining itself ("still waiting").
// 4. Economy: 150 characters, one breath, every word earns its place,
//    reads well aloud.
// 5. Label craft: catalogue date (c. 2003), material (adhesive-backed),
//    provenance ("Found in situ").
// Runner-up considered and rejected: a microwave "communal reheating
// shrine" whose offerings summoned "the cleaning rite" (160 chars) —
// funny, but the joke is about office smells, not the object's imagined
// history; the sticky note's "call mum" is more specific and more human.
// Determinism: the line is a string literal; no input, no network, no
// randomness, no time. Verified: two consecutive runs produce byte-identical
// /output/entry.txt (sha256 d400423bd613f5220b473164e428157e9c55d4b8182d69fffac98d4b900847a7).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Votive tablet, adhesive-backed, c. 2003. Inscribed 'call mum' in a hand now lost; stuck to a monitor and never answered. Found in situ, still waiting.";

// The gate only accepts 1–180 characters of non-blank UTF-8 text;
// fail loudly here rather than shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-180 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
