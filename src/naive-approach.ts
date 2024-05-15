import { allWords } from "./words";

// This attempt is unfinished.
// It was a naive approach to the problem to help me understand the problem better.
// This algorithm does not complete in a reasonable amount of time... Like at all.

const vowels = ["a", "e", "i", "o", "u"];

let i = 0;

const isAVowel = (letter: string) => vowels.includes(letter);
const getVowels = (word: string) => word.split("").filter(isAVowel);

for (const firstWord of allWords) {
  console.log(`${i++}/${allWords.length}`);

  const firstWordVowels = getVowels(firstWord);

  for (const secondWord of allWords) {
    if (firstWord === secondWord) {
      continue;
    }

    const secondWordVowels = getVowels(secondWord);

    if (firstWordVowels.some(vowel => secondWordVowels.includes(vowel))) {
      continue;
    }

    third: for (const thirdWord of allWords) {
      if (firstWord === thirdWord || secondWord === thirdWord) {
        continue;
      }

      const thirdWordVowels = getVowels(thirdWord);

      if (
        firstWordVowels.some(vowel => thirdWordVowels.includes(vowel)) ||
        secondWordVowels.some(vowel => thirdWordVowels.includes(vowel))
      ) {
        continue;
      }

      const allMatchedVowels = [...firstWordVowels, ...secondWordVowels, ...thirdWordVowels];

      if (allMatchedVowels.length !== vowels.length) {
        continue;
      }

      for (const vowel of vowels) {
        if (!allMatchedVowels.includes(vowel)) {
          continue third;
        }
      }

      console.log([allMatchedVowels, firstWord, secondWord, thirdWord]);
    }
  }
}
