function isVow(a) {
  arr = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (String.fromCharCode(a[i]) == arr[j]) {
        a[i] = arr[j];
      }
    }
  }
  return a;
}
