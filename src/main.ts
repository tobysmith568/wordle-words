import { generateMatches } from "./efficient-approach.ts";

console.time("Execution time");

const allowedWordCount = 2;

const matches = generateMatches(allowedWordCount);
console.log(matches);

console.timeEnd("Execution time");
