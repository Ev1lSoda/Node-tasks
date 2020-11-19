//includes
const fileWorkflow = require("./readWriteFile");
let conditionFunction = {
  include: require("./include"),
  sort_by: require("./sortBy"),
  exclude: require("./exclude"),
};

//reading data
const info = fileWorkflow.read("./JSONs/data.json");
//extracting data and conditions
let data = info.data;
const conditions = info.condition;
//parcing data through all conditions
for (const condition in conditions) {
  data = conditionFunction[condition](data, conditions[condition]);
}
//creating answer
const answer = {
  result: data,
};
//writing answer
fileWorkflow.write(JSON.stringify(answer, "\n", 1), "./JSONs/answer.json");
