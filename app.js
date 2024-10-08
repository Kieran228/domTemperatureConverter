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

//? Creating a variable for the temperature textbox
let tempValue = document.getElementById("userinput")

//? Creating an empty string to store user inputs in
let userInputValue = ""

//? This event listener is consisently tracking input changes
//! Makes sure the tag "userinput" is being targeted correctly!
tempValue.addEventListener("input", () => {
    userInputValue = tempValue.value
    console.log(userInputValue)
})

//? Creating an empty string to store user selections in
var selectedInitialUnit = ""
let selectedTargetUnit = ""

//? Setting the option tag "Fahrenheit" to a variable
var fahrenheitInitialUnitOption = document.getElementById("fahrenheit")

function initialFahrenheitDisplayer() {  
    selectedInitialUnit = fahrenheitInitialUnitOption.value
    console.log(selectedInitialUnit)
    initialButton.innerHTML = "Fahrenheit"
}

//? Setting the option tag "Fahrenheit" to a variable
var fahrenheitTargetUnitOption = document.getElementById("targetFahrenheit")

function targetFahrenheitDisplayer() {
    selectedTargetUnit = fahrenheitTargetUnitOption.value
    console.log(selectedTargetUnit)
    targetButton.innerHTML = "Fahrenheit"
}

let fahrenheitTextBox = document.getElementById("fahrenheitResults")

//? Setting the option tag "celsius" to a variable
let celsiusUnitInitialOption = document.getElementById("initialCelsius")

function initialCelsiusDisplayer() { 
    selectedInitialUnit = celsiusUnitInitialOption.value
    console.log(selectedInitialUnit)
    initialButton.innerHTML = "Celsius"
}
//? Setting the option tag "celsius" to a variable
let celsiusTargetUnitOption = document.getElementById("targetCelsius")

function targetCelsiusDisplayer() {
    selectedTargetUnit = celsiusTargetUnitOption.value
    console.log(selectedTargetUnit)
    targetButton.innerHTML = "Celsius"
}

let celsiusTextBox = document.getElementById("celsiusResults")

//? Setting the option tag "Kelvin" to a variable
let kelvinUnitInitialOption = document.getElementById("initialKelvin")

function initialKelvinDisplayer() { 
    selectedInitialUnit = kelvinUnitInitialOption.value
    console.log(selectedInitialUnit)
    initialButton.innerHTML = "Kelvin"
}
//? Setting the option tag "Kelvin" to a variable
let kelvinTargetUnitOption = document.getElementById("targetKelvin")

function targetKelvinDisplayer() {
    selectedTargetUnit = kelvinTargetUnitOption.value
    console.log(selectedTargetUnit)
    targetButton.innerHTML = "Kelvin"
}

let kelvinTextBox = document.getElementById("kelvinResults")

//? Creating a variable for the initial unit button
let initialButton = document.getElementById("initialButton")

//? Creating a variable for the target unit button
let targetButton = document.getElementById("targetButton")

// //? Converter Button
let converterButton = document.getElementById("convertButton")

converterButton.addEventListener("click", () => {
    if (selectedInitialUnit === "Fahrenheit" && selectedTargetUnit === "Celsius") {
        let conversion = (userInputValue - 32) * 5/9
        celsiusTextBox.value = conversion.toFixed(2)
    } 
    if (selectedInitialUnit === "Celsius" && selectedTargetUnit === "Fahrenheit") {
        let conversion = (userInputValue * 9/5) + 32
        fahrenheitTextBox.value = conversion.toFixed(2)
    }
    if (selectedInitialUnit === "Celsius" && selectedTargetUnit === "Kelvin") {
        Number(userInputValue)
        let conversion = (Number(userInputValue) + 273.15)
        kelvinTextBox.value = conversion
    }
    if (selectedInitialUnit === "Celsius" && selectedTargetUnit === "Kelvin") {
        Number(userInputValue)
        let conversion = (Number(userInputValue) - 273.15)
        kelvinTextBox.value = conversion
    }
})





 


