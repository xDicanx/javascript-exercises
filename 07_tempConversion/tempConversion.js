const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9/5)+32;
  return parseFloat(fahrenheit.toFixed(1));
};

//Optimized by chatgpt
/*

const roundToOneDecimal = (num) => parseFloat(num.toFixed(1));


const convertToCelsius = (fahrenheit) => 
    roundToOneDecimal((fahrenheit - 32) * 5 / 9);


const convertToFahrenheit = (celsius) => 
    roundToOneDecimal((celsius * 9 / 5) + 32);
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
