var gimme = function (inputArray) {
    const arr = [...inputArray];
    arr.sort((a,b)=>a-b);
    return inputArray.indexOf(arr[1])
  };