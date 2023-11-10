var billamountElement = document.getElementById("billamountField");
var percentageElement = document.getElementById("percentageField");
var tipamountElement = document.getElementById("tipamountField");
var totalamountElement = document.getElementById("totalamountField");
var consoleMessageField = document.getElementById("errormessageField");


function caluteButton(){

    let billAmount = parseInt(billamountElement.value);
    let percentage = parseInt(percentageElement.value);
    let tipAmount = parseInt(tipamountElement.value);
    let totalAmount = parseInt(totalamountElement.value);

    let tipCalculation = (billAmount)*(percentage) /100;
    tipamountElement.value = tipCalculation;

    let totalamountResult = Math.ceil( billAmount + tipCalculation );
    totalamountElement.value = totalamountResult;

    if (billamountElement.value === ""){
        errormessageField.textContent = "Please provide the amount";
    }

    else if (percentageElement.value === ""){
        errormessageField.textContent = "Please provide the amount";
    }

}
