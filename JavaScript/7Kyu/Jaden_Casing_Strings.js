String.prototype.toJadenCase = function () {
  let arrStr = this.split(" ");
  let final = arrStr.map((x) => {
    return x[0].toUpperCase() + x.slice(1);
  });
  final = final.join(" ");
  return final;
};
