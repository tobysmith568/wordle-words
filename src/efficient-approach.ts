import { allWords } from "./words";

const vowels = ["a", "e", "i", "o", "u"];
const allVowelsMask = (1 << vowels.length) - 1;

const badLetters = ["j", "q", "v", "x", "z"];
const goodLetters = ["r", "s"];

const maskContainsAllVowels = (mask: number) => mask === allVowelsMask;
const maskAlreadyContainsVowel = (mask: number, vowelIndex: number) => mask & (1 << vowelIndex);
const distinct = <T>(letter: T, index: number, array: T[]) => array.indexOf(letter) === index;

const allLettersAreUnique = (letters: string) => {
  const allLetters = letters.split("");
  const uniqueLetters = allLetters.filter(distinct);

  return allLetters.length === uniqueLetters.length;
};

const containsAllGoodLetters = (letters: string) => {
  for (const letter of goodLetters) {
    if (!letters.includes(letter)) {
      return false;
    }
  }

  return true;
};

const updateMaskWithWord = (word: string, initialMask: number) => {
  let mask = initialMask;
  let isInvalidWord = false;

  for (const letter of word) {
    if (badLetters.includes(letter)) {
      isInvalidWord = true;
      break;
    }

    const vowelIndex = vowels.indexOf(letter);
    if (vowelIndex === -1) {
      continue;
    }

    if (maskAlreadyContainsVowel(mask, vowelIndex)) {
      isInvalidWord = true;
      break;
    }

    mask |= 1 << vowelIndex;
  }

  return { mask, isInvalidWord };
};

const wordLoop = (
  startingIndex: number,
  maskSoFar: number,
  wordsSoFar: string[],
  matches: string[][],
  allowedWordCount: number
) => {
  for (let i = startingIndex; i < allWords.length; i++) {
    const word = allWords[i];
    const { mask: currentMask, isInvalidWord } = updateMaskWithWord(word, maskSoFar);

    if (isInvalidWord) {
      continue;
    }

    const letters = wordsSoFar.join("") + word;
    if (
      maskContainsAllVowels(currentMask) &&
      allLettersAreUnique(letters) &&
      containsAllGoodLetters(letters)
    ) {
      matches.push([...wordsSoFar, word]);
      continue;
    }

    const nextWordsSoFar = [...wordsSoFar, word];
    if (nextWordsSoFar.length === allowedWordCount) {
      return;
    }

    wordLoop(i + 1, currentMask, nextWordsSoFar, matches, allowedWordCount);
  }
};

export const generateMatchesWithAllVowels = (allowedWordCount: number) => {
  const matches: string[][] = [];

  for (let i = 0; i < allWords.length; i++) {
    const firstWord = allWords[i];
    const { mask, isInvalidWord } = updateMaskWithWord(firstWord, 0);

    if (isInvalidWord) {
      continue;
    }

    wordLoop(i + 1, mask, [firstWord], matches, allowedWordCount);
  }

  return matches;
};
