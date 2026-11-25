// Unsent: The Micro-Confession Sprint
// Entry program (program/v1): writes one two-part micro-confession to
// /output/entry.txt — a "To:" line naming who it was meant for, then the
// unsent message itself, one line written exactly as it was typed, with no
// explanation after it. Deterministic: the same bytes on every run.
// Gate: /output/entry.txt is 142 UTF-8 characters (limit 1–260), exactly
// two lines; the message line alone is 134 characters (judge brief: ≤200).
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "To: Dad\n" +
  "I kept your Nokia charger in my top drawer for three years after the funeral, in case you ever called to ask why I only visited twice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
