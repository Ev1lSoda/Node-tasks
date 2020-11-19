//in this function we get the biggest possible cells into main thruster
module.exports = function (corrections, cells, n, k) {
  let thruster = [];
  //"for" to check every correction
  for (let i = 0; i < n; i++) {
    let counter = 0;
    let cell = 0;
    const correction = corrections[i];
    //getting the biggest possible cell
    for (let f = 0; f < k; f++) {
      if (cell < cells[f] && cells[f] <= correction) {
        cell = cells[f];
        counter = f;
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
