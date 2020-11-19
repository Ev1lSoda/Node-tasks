//function to check user input and does it have special word
module.exports = function (args) {
  for (const arg of args) {
    if (arg === "extend") {
      return true;
    }
  }
};
