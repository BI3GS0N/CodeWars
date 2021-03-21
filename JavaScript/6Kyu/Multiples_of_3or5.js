function solution(number) {
  let arr = [];
  let sum = 0;
  for (i = 1; i < number; i++) {
    if ((number - i) % 5 == 0 || (number - i) % 3 == 0) {
      arr.push(number - i);
    }
  }
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
