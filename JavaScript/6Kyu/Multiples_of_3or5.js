function solution(number) {
  let arr = [];
  let sum = 0;
  for (i = 1; i < number; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
      arr.push(i);
    }
  }
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
