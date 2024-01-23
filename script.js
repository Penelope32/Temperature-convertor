
let unitsInput = document.getElementById("units");
let display = document.getElementById("result_container");
let resultValue = 0;

function updateDisplay() {
    display.textContent = resultValue.toFixed(2);
}

function calculateResultFunction() {
    let temperatureInput = document.getElementById("temperature").value;
    
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let temperature = parseFloat(temperatureInput.value);
    console.log("Input temperature:", temperature);
    console.log("Selected unit:", unitsInput.value);

    if (unitsInput.value === "celsius") {
        resultValue = (temperature * 9/5) + 32;
    } else if (unitsInput.value === "fahrenheit") {
        resultValue = (temperature - 32) * 5/9;
    }
    console.log("Result:", resultValue);

    updateDisplay();
}
