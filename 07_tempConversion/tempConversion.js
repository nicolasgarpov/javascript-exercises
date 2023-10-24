const convertToCelsius = function(fahrenheit) {
  const resultado1 = parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));
  console.log(resultado1);
  return resultado1;
};

const convertToFahrenheit = function(celsius) {
  const resultado2 = parseFloat(((celsius * 1.8) + 32).toFixed(1));
  console.log(resultado2);
  return resultado2;
};

// Ejemplos de uso
const temperaturaCelsius = convertToCelsius(68);
const temperaturaFahrenheit = convertToFahrenheit(20);

console.log(temperaturaCelsius); // Resultado como número
console.log(temperaturaFahrenheit); // Resultado como número



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
