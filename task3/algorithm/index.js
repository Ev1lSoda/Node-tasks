//function to set our sets xD
module.exports = function (data, n, sum, set, resSetId) {
  //sums of sets that we will compare
  let sum1 = data[n - 1];
  let sum2 = sum - sum1;
  //resulting sets
  let set1 = [];
  let set2 = [];
  //to compare if the last number of set is bigger that all others
  if (sum1 >= sum2) {
    for (let i = 0; i < n - 1; i++) {
      set2[i] = set[i];
    }
    set1[0] = set[n - 1];
    return { set1: [...set1], set2: [...set2] };
  }
  //so this "for" is to increase first set by one number and decrease second one by same number
  for (let i = n - 2; i >= 0; i--) {
    //doing our stuff
    sum1 += data[i];
    sum2 -= data[i];
    resSetId[i] = 1;
    //compare if sets are equal if they are we will end up here
    if (sum1 === sum2) {
      break;
    }
    //this if is to chek did sum1 become bigger then sum2
    else if (sum1 > sum2) {
      sum1 -= data[i];
      sum2 += data[i];
      resSetId[i] = 2;
      //if they do we check if previous number didn't change the situation between sums
      //this is used as a deterrent to the first condition
      if (data[i] != data[i - 1] && sum1 + data[i - 1] < sum2 - data[i - 1]) {
        sum1 += data[i];
        sum2 -= data[i];
        resSetId[i] = 1;
        break;
      }
    }
  }
  //generating resulting sets by resSetId
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < n; i++) {
    if (resSetId[i] === 1) {
      set1[counter1] = set[i];
      counter1++;
    } else {
      set2[counter2] = set[i];
      counter2++;
    }
  }
  return { set1: [...set1], set2: [...set2] };
};
