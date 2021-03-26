function filter_list(l) {
  return l.filter((v) => typeof v == "number");
}

// function filter_list(l) {
//   let arr = [];
//   for (let i in l) {
//     if (typeof l[i] === "number") {
//       arr.push(l[i]);
//     }
//   }
//   return arr;
// }
