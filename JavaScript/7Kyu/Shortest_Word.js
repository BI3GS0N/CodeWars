function findShort(s) {
  let arr = s.split(" ");
  let len = arr[0];
  for (let strs in arr) {
    if (arr[strs].length < len.length) {
      len = arr[strs];
    }
  }
  return len.length;
}
