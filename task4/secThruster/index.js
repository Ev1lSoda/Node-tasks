//in this function we get the biggest possible cells into second thruster
module.exports = function (corrections, cells, main_thruster, n, k) {
  let thruster = [];
  //"for" to check every correction
  for (let i = 0; i < n; i++) {
    let counter = 0;
    let cell = cells[0];
    const correction = corrections[i];
    if (main_thruster[i] + cell > correction) {
      cell = 0;
    }
    //getting the biggest possible cell
    for (let f = 0; f < k - 1; f++) {
      //in case that we should compare speed of two thrusters we should now compare their sum
      //so we are using sum power of two cells
      const sum = main_thruster[i] + cell;
      const nextSum = main_thruster[i] + cells[f + 1] / 2;
      if (sum === correction) {
        cell = cells[f];
        counter = f;
        break;
      }
      //if our sum is not equal to correction, then we want to see if next sum is not bigger than correction
      //and bigger than current
      else if (sum < nextSum && nextSum <= correction) {
        //if it do, we change cell for our next sum
        cell = cells[f + 1];
        counter = f + 1;
      }
    }
    //saving result for one correction and set cell as used if it was
    if (cell !== 0) {
      thruster[i] = cell;
      cells[counter] = 0;
    } else {
      thruster[i] = 0;
    }
  }
  return [cells, thruster];
};
