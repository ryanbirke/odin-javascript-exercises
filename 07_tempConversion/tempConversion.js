const convertToCelsius = function(startingTemp) {
  let endTemp = ((startingTemp - 32) * 5 / 9);
  return +(endTemp.toFixed(1));
};

const convertToFahrenheit = function(startingTemp) {
  let endTemp = ((startingTemp * 9 / 5) + 32);
  return +(endTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
