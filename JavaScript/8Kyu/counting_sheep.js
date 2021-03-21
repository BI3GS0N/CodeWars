function countSheeps(arrayOfSheep) {
  let count = 0;

  for (let sheep in arrayOfSheep) {
    if (arrayOfSheep[sheep]) {
      count++;
    }
  }
  return count;
}
