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

//? Temp Value input
let tempValue = document.getElementById("userinput")
// userInput = tempValue.value
let userInputValue = ""

//? This event listener is consisently tracking input changes
//! Makes sure the tag "userinput" is being targeted correctly!
tempValue.addEventListener("input", () => {
    userInputValue = tempValue.value
    console.log(userInputValue)
})

//? Initial Temp Unit
let initialUnitButton = document.querySelector(".iUnitButton button")

let initialUnitOptions = document.querySelectorAll(".dropdown1 li a")

let initialUnitDropDown = document.getElementById("dropdown")
let selectedUnit = initialUnitDropDown.value

initialUnitOptions[0].addEventListener("click", () => {
    if (selectedUnit == initialUnitOptions[0].value) {
        console.log(initialUnitOptions[0].innerHTML)
    }
})


    




//? Target Temp Unit
let targetUnitButton = document.querySelector(".target-split-button button")

//? Converter Button
let converterButton = document.getElementById("convertButton")
 

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

