// celsius = (fahrenheit - 32) * 9 / 5   
function convertToCelsius (fahrenheitTemp) {
    let celsiusConversion = (fahrenheitTemp -32) * 5/9;
    celsiusConversion = (Math.round(celsiusConversion * 10) / 10);
    console.log(celsiusConversion);
    return celsiusConversion;  
};

// fahrenheit = (celsius * (9/5) ) + 32
function convertToFahrenheit (celsiusTemp) {
    let fahrenheitConversion = (celsiusTemp * 9/5) + 32;
    fahrenheitConversion = ((Math.round(fahrenheitConversion * 10) / 10));
    console.log(fahrenheitConversion);
    return fahrenheitConversion;
};     
convertToCelsius(100);    
convertToFahrenheit(0); 
       

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
