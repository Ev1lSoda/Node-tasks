//function to read and write files
let fs = require("fs");
module.exports.read = function (path) {
  const task = JSON.parse(fs.readFileSync(path, "utf8"));
  return task;
};
module.exports.write = function (data, path) {
  fs.writeFile(path, data, function (err) {
    if (err) {
      throw err;
    }
  });
};
