export function truncateString(word = "", maxLength = 12) {
  if (word.length > maxLength) {
    return word.substring(0, maxLength) + "...";
  }
  return word;
}