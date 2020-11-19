//geting args
const myArgs = process.argv.slice(2);
//includes
const fileWorkflow = require("./readWriteFile");
const convertor = require("./convertor");
const checkArgs = require("./userInput");
let howTo = fileWorkflow.read("./JSONs/howTo.json");
//check user howTo file
let extend = checkArgs(myArgs);
if (extend) {
  const userHowTo = fileWorkflow.read("./JSONs/userHowTo.json");
  if (typeof userHowTo[0] !== "undefined") {
    for (const rule of userHowTo) {
      const key = rule.from + "_" + rule.to;
      howTo[key] = rule.howTo;
    }
  }
  //extend existing howTo
  fileWorkflow.write(JSON.stringify(howTo, "\n", 2), "./JSONs/howTo.json");
}
//reading data
const data = fileWorkflow.read("./JSONs/data.json");
//from what distance unit to what distance unit
const fromTo = data.distance.unit + "_" + data.convert_to;
//creating answer
const answer = {
  unit: data.convert_to,
  value: Number(convertor(data.distance.value, howTo[fromTo])),
};
//writing answer
fileWorkflow.write(JSON.stringify(answer), "./JSONs/answer.json");
