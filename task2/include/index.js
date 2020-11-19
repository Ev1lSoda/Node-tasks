//function to keep just accepted objs
module.exports = function (data, rules) {
  //we need to create new array in case if conditins this type will be more than one
  let newData = [];
  let counter = 0;
  for (const rule of rules) {
    //getting key and value of condition
    let obj = {
      key: Object.keys(rule)[0],
      value: Object.values(rule)[0],
    };
    //generating new array to keep just included objs
    for (let i = 0; i < data.length; i++) {
      if (data[i][obj.key] === obj.value) {
        newData[counter++] = data[i];
      }
    }
  }
  return newData;
};
