//sum thrusters speed to count delta_velocity
module.exports = function (main_thruster, sec_thruster, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += main_thruster[i] + sec_thruster[i] / 2;
  }
  return sum;
};
