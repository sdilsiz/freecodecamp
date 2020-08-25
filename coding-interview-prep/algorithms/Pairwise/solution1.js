function pairwise(arr, arg) {
    if (arr.length === 0) return 0;
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
      if (pairs.length === 0) {
        pairs.push([{value:arr[i], index:i}]);
      } else {
        for (let j = 0; j < pairs.length; j++) {
          if (pairs[j][0].value === arg - arr[i] && pairs[j].length===1) {
            pairs[j].push({value:arr[i], index:i});
            break;
          } else if (j === pairs.length - 1) {
              pairs.push([{value:arr[i], index:i}]);
              break;
            }
        }
      }
    }
    console.log(pairs);
    pairs = pairs.filter(e => e.length === 2).map(e => e[0].index+e[1].index);
    console.log(pairs);
    let re = pairs.reduce((a, b) => a + b);
    console.log(re);
    return re;
  }

  pairwise([1, 1, 1], 2);