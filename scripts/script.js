//function to display an input 
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//function to clear all input at once
function clearDisplay() {
    document.getElementById('display').value = '';
}

//function to clear an input at a go
/*
function clearDisplay() {
    document.getElementById('display').value = '';
}
*/

//function that calculate input along with all operators
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}