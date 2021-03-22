function isIsogram(str) {
  const size = str.length;
  str = str.toLowerCase();
  if (str === "") {
    return true;
  }

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  }
  return true;
}
