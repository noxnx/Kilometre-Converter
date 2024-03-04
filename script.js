const kilometerInput = document.getElementById('number1');
const meterInput = document.getElementById('number2');
const calculateButton = document.getElementById('calculate');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

let meter = 0;
let kilometer = 0;

calculateButton.addEventListener('click', calculateMeters);
calculateButton.addEventListener('click', calculateKilometers);

function calculateMeters() {
    resultMeters = kilometerInput.value * 1000;
    output1.innerText = `${resultMeters}m`;
}

function calculateKilometers() {
    resultKilometers= meterInput.value / 1000;
    output2.innerText = `${resultKilometers}km`;
}
