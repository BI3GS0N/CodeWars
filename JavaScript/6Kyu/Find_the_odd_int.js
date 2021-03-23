function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let flag = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        flag += 1;
      }
    }
    if (flag % 2 !== 0) {
      return A[i];
    }
  }
}

arr1 = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
