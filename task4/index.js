//includes
const fileWorkflow = require("./readWriteFile");
const secThruster = require("./secThruster");
const mainThruster = require("./mainThruster");
const finaleThrusters = require("./finaleThrusters");
const deltaVelocity = require("./deltaVelocity");

//read data
const data = fileWorkflow.read("./JSONs/data.json");
let main_thruster = [];
let sec_thruster = [];
//making usage of data more comfortable
let cells = data.cells;
let corrections = data.corrections;
const n = data.corrections.length;
const k = data.cells.length;
//main thruster first because we need use cells most productive
[cells, main_thruster] = mainThruster(corrections, cells, n, k);
//adding cells that wasn't used for main thruster
[cells, sec_thruster] = secThruster(corrections, cells, main_thruster, n, k);
//shuffleing cells if needed
[main_thruster, sec_thruster] = finaleThrusters(corrections, cells, main_thruster, sec_thruster, n, k);
//counting delta velocity
let delta_velocity = deltaVelocity(main_thruster, sec_thruster, n);
//creating answer
const answer = {
  main_thruster,
  sec_thruster,
  delta_velocity,
};
//writing answer
fileWorkflow.write(JSON.stringify(answer), "./JSONs/answer.json");
