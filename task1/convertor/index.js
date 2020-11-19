//function to convert one distance unit into another
module.exports = function (param, howTo) {
  return (param * howTo).toFixed(2);
};
