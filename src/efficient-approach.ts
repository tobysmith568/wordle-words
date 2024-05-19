import { allWords } from "./words.ts";

const badLetters = ["j", "q", "v", "x", "z"];
const goodLetters = ["a", "e", "i", "o", "u", "r", "s"];
const goodLettersMask = (1 << goodLetters.length) - 1;

const maskContainsAllGoodLetters = (mask: number) => mask === goodLettersMask;
const maskAlreadyContainsGoodLetter = (mask: number, vowelIndex: number) =>
  mask & (1 << vowelIndex);
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

    const goodLetterIndex = goodLetters.indexOf(letter);
    if (goodLetterIndex === -1) {
      continue;
    }

    if (maskAlreadyContainsGoodLetter(mask, goodLetterIndex)) {
      isInvalidWord = true;
      break;
    }

    mask |= 1 << goodLetterIndex;
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
      maskContainsAllGoodLetters(currentMask) &&
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

export const generateMatches = (allowedWordCount: number) => {
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
