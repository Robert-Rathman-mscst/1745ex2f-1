/* Ex1e
*   Author: Robert Rathman
    Date: 1/20/2016

    Filename: standard.js
    */

// Global variable declarations
var hours = 0.0;
var payRate = 0.0;
var taxRate = 15.0;
var grossPay = 0.0;
var tax = 0.0;
var netPay = 0.0;

//Add event listeners definitions here
function calculate() {
    hours = 0.0;
    payRate = 0.0;
    taxRate = 0.0;
    grossPay = 0.0;
    tax = 0.0;
    netPay = 0.0;

    var hoursText = document.getElementById("hoursInputNumber").value;
    var payRateText = document.getElementById("payRateInputNumber").value;
    var taxRateText = document.getElementById("taxRateInputNumber").value;

    (hoursText && !isNaN(hoursText))
        ? hours = parseFloat(hoursText)
        : window.alert("Invalid hours. Enter a number 0 - 99.99");

    (payRateText && !isNaN(payRateText))
        ? payRate = parseFloat(payRateText)
        : window.alert("Invalid pay rate. Enter a number 0 - 499.99");

    (taxRateText && !isNaN(taxRateText))
        ? taxRate = (parseFloat(taxRateText)) / 100
        : window.alert("Invalid tax rate. Enter a number 0 - 39.99");

    grossPay = hours * payRate;
    tax = grossPay * taxRate;
    netPay = grossPay - tax;

    document.getElementById("grossPaySpan").innerHTML = grossPay.toFixed(2);
    document.getElementById("taxSpan").innerHTML = tax.toFixed(2);
    document.getElementById("netPaySpan").innerHTML = netPay.toFixed(2);


}

//reset form
function resetForm() {
    document.getElementById("hoursInputNumber").value = "0.00";
    document.getElementById("payRateInputNumber").value = "0.00";
    document.getElementById("taxRateInputNumber").value = "15";

    // call function to display initial values of calculations
    calculate();
    createEventListeners();
}

//create event listeners
function createEventListeners() {
    document.getElementById("hoursInputNumber").addEventListener("change", calculate, false);
    document.getElementById("payRateInputNumber").addEventListener("change", calculate, false);
    document.getElementById("taxRateInputNumber").addEventListener("change", calculate, false);
}

//Reset form when page is loaded
window.addEventListener("load", resetForm, false);