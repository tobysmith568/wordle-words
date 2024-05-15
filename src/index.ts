import { generateMatchesWithAllVowels } from "./efficient-approach";

console.time("Execution time");

const allowedWordCount = 2;

const matches = generateMatchesWithAllVowels(allowedWordCount);
console.log(matches);

console.timeEnd("Execution time");
