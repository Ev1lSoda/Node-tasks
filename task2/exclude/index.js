//function to exclude some objs from array
module.exports = function (data, rules) {
  for (const rule of rules) {
    //getting key and value of condition
    let obj = {
      key: Object.keys(rule)[0],
      value: Object.values(rule)[0],
    };
    //modifying array to exclude files
    for (let i = 0; i < data.length; i++) {
      if (data[i][obj.key] === obj.value) {
        let k = data.splice(i--, 1);
      }
    }
  }
  return data;
};
