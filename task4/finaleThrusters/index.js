//this function is needed to get rid of situations when we use our cells not that productive
module.exports = function (corrections, cells, main_thruster, sec_thruster, n, k) {
  let mThruster = [];
  let sThruster = [];
  //checking every correction
  for (let i = 0; i < n; i++) {
    // console.log("i: ", i);
    let counter = 0;
    //shuffle thrusters cells if we can
    let topCell = sec_thruster[i];
    let bottomCell = main_thruster[i];
    const correction = corrections[i];
    if (topCell + bottomCell / 2 > correction) {
      topCell = main_thruster[i];
      bottomCell = sec_thruster[i];
    }
    //here we create the most suitable sum of cells for current correction
    for (let f = 0; f < k; f++) {
      let sum = topCell + bottomCell / 2;
      const nextSum = cells[f] + bottomCell / 2;
      if (sum <= nextSum && nextSum <= correction) {
        const oneTimeVar = topCell;
        topCell = cells[f];
        cells[f] = oneTimeVar;
        counter = f;
      }
    }
    //here we check if our new sum is better than the old one
    if (topCell + bottomCell / 2 > main_thruster[i] + sec_thruster[i] / 2) {
      mThruster[i] = topCell;
      sThruster[i] = bottomCell;
    } else {
      mThruster[i] = main_thruster[i];
      sThruster[i] = sec_thruster[i];
      cells[counter] = topCell;
    }
  }
  return [mThruster, sThruster];
};
