//! Temp Convertor Website:
//? 1. Project Setup
//TODO Folder Organization: Create a new project folder and include the following files:
//TODO index.html for the HTML structure.
//TODO styles.css for any custom styles.
//TODO app.js for the JavaScript code.

//? 2. HTML Structure
//TODO Title: Create a title and a header for your temperature converter page.
//*TODO Input Fields:
//* Add an input field where users can enter a temperature value.
//* Include dropdown menus for selecting the temperature units (e.g., Celsius, Fahrenheit, Kelvin) for both the original and target units.
//* Buttons: Add a button that will trigger the conversion process.
//* Result Display: Include an area on the page where the conversion result will be displayed.
//? 3. Styling with Bootstrap
//* Responsive Design: Use Bootstrap's grid system to make your layout responsive.
//* Form Styling: Apply Bootstrap classes to style your input fields, dropdowns, and buttons.
//* Custom Styles: Optionally, add custom styles in your styles.css to enhance the look and feel of the page.
//? 4. JavaScript Logic
//* DOM Manipulation:
//* Select the necessary elements (e.g., input fields, dropdowns, buttons, result display) using JavaScript.
//* Conversion Functions:
//* Write functions that handle the conversion logic between Celsius, Fahrenheit, and Kelvin.
//* Event Handling:
//* Implement event listeners that trigger the conversion when the user interacts with the page (e.g., clicking the "Convert" button).
//* Result Display:
//* Update the result area of the page with the converted temperature.
//! 5. Bonus Features (Optional)
//* Input Validation: Ensure that the user inputs valid temperature values.
//* Unit Conversion Validation: Prevent unnecessary conversions, such as converting from Celsius to Celsius.
//* Additional Features: Consider adding features like converting to multiple units simultaneously or a reset button to clear the inputs and results.

//* celsiusToKelvin:
//* celsiusNum + 273.15

//* celsiusToFahrenheit:
//* (celsius * 9/5) + 32

//* KelvinToCelsius conversion:
//* kelvinNum - 273.15

//* fahrenheitToCelsius:
//* (fahrenheit - 32) * 5/9\
//? Initial Temp Unit Button Selector
let initialUnitButton = document.querySelector(".initial-split-button button")
let initialUnitChoice = initialUnitButton.value
console.log(initialUnitChoice)

//? Target Unit Button Selector
let targetUnitButton = document.querySelector(".target-split-button button")

//? Converter Button
let converterButton = document.getElementById("convertButton")

//? User Temp Value input
let userTempValueInput = document.getElementById("userinput")
userInput = userTempValueInput.value
console.log(userInput)



function tempConverter(initialUnit, temperature, targetUnit) {
    if (targetUnit === "K" && initialUnit == "C") {
        return (temperature + 273.15);
    } else if (targetUnit == "F" && initialUnit == "C") {
         return (temperature * 9/5 + 32);
    } else if (targetUnit == "C" && initialUnit == "K") {
         return (temperature - 273.15);
    } else if (targetUnit == "C" && initialUnit == "F") {
         return (temperature - 32) * 5/9;
    }
 };

 converterButton.addEventListener("click", tempConverter)

//? Calculation functions
function celsiusToKelvin(value) {
    return value + 273.15
}

function celsiusToFahrenheit(value) {
    return (value * 9/5) + 32;
}

function kelvinToCelsius(value) {
    return value - 273.15
}

function fahrenheitToCelsius(value) {
   return (value - 32) * 5/9
}

