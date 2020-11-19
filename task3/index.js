//includes
const fileWorkflow = require("./readWriteFile");
const myAlgorithm = require("./algorithm");

//reading data
const data = fileWorkflow.read("./JSONs/data.json").set;
//sorting numbers by value
data.sort(function (a, b) {
  return a - b;
});
//number of set
const n = data.length;
//sum of set
let sum = 0;
let set = [];
//array that contain info about in wich set should number be
let resSetId = [];
for (let i = 0; i < n; i++) {
  sum += data[i];
  set[i] = data[i];
  resSetId[i] = 2;
}
resSetId[n - 1] = 1;
//creating answer
const answer = myAlgorithm(data, n, sum, set, resSetId);
//writing answer
fileWorkflow.write(JSON.stringify(answer), "./JSONs/answer.json");
