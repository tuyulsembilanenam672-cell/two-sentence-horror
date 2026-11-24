import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "The rescue dog we adopted flinches every time I pick up a hammer. " +
  "Yesterday I found my own name carved into the basement wall, in my handwriting, dated three years before I moved in.";

function countSentences(text: string): number {
  const trimmed = text.trim();
  const terminators = trimmed.match(/[.!?]+/g);
  return terminators ? terminators.length : 0;
}

const points = [...STORY];
if (points.length < 1 || points.length > 400) {
  throw new Error(`entry must be 1-400 code points, got ${points.length}`);
}
if (STORY.trim() === "") {
  throw new Error("entry must not be only white space");
}
if (STORY.includes("\n")) {
  throw new Error("entry must be a single text without newlines");
}
if (countSentences(STORY) !== 2) {
  throw new Error(`entry must be exactly two sentences, got ${countSentences(STORY)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${points.length} code points to /output/entry.txt`);
