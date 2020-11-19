//function to modify an array by sorting conditions
module.exports = function (data, rules) {
  for (const rule of rules) {
    //creating and generating an array by following conditions
    let sortDirection = [];
    for (let i = 0; i < data.length; i++) {
      sortDirection[i] = data[i][rule];
    }
    //sorting an array by following conditions and it's type
    if (typeof sortDirection[0] === "string") {
      sortDirection.sort();
    } else if (typeof sortDirection[0] === "number") {
      sortDirection.sort(function (a, b) {
        return a - b;
      });
    } else if (typeof sortDirection[0] === "boolean") {
      sortDirection.sort(function (x, y) {
        return x === y ? 0 : x ? -1 : 1;
      });
    }
    //sorting our data by sorted array
    let counter = 0;
    for (let i = 0; i < sortDirection.length; i++) {
      for (let f = counter; f < data.length; f++) {
        if (data[f][rule] === sortDirection[i]) {
          const oneTimeVar = data[f];
          data[f] = data[counter];
          data[counter++] = oneTimeVar;
        }
      }
    }
  }
  return data;
};
