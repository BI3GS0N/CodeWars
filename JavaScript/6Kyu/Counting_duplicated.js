function duplicateCount(text) {
  let count = 0;
  let dup = [];
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (
        !dup.includes(text[i].toLowerCase()) &&
        text[i].toLowerCase() == text[j].toLowerCase()
      ) {
        count++;
        dup.push(text[i].toLowerCase());
      }
    }
  }
  return count;
}
