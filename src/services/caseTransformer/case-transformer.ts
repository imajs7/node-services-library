// case-transformer.ts

// Function to capitalize all words in a sentence
export function capitalizeAllWords(sentence: string): string {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Function to capitalize the first word of each sentence
export function capitalizeFirstWord(sentence: string): string {
  return sentence
    .split(". ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(". ");
}

// Function to lowercase all letters
export function lowercaseAll(sentence: string): string {
  return sentence.toLowerCase();
}

// Function to uppercase all letters
export function uppercaseAll(sentence: string): string {
  return sentence.toUpperCase();
}
