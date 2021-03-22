function DNAStrand(dna) {
  let ret = "";
  for (let dns in dna) {
    if (dna[dns] == "A") {
      ret += "T";
    } else if (dna[dns] == "T") {
      ret += "A";
    } else if (dna[dns] == "G") {
      ret += "C";
    } else if (dna[dns] == "C") {
      ret += "G";
    }
  }
  return ret;
}
