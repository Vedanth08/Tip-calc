var billamountElement = document.getElementById("billamountField");

var percentageElement = document.getElementById("percentageField");

var tipamountElement = document.getElementById("tipamountField");

var totalamountElement = document.getElementById("totalamountField");

var consoleMessageField = document.getElementById("errormessageField");

function caluteButton(){

    let billAmount = parseInt(billamountElement.value);

    let tipAmount = parseInt(tipamountElement.value);

    let totalAmount = parseInt(totalamountElement.value);


    let tip_percentageValue = 3;

    let tax_percentageValue = 5;


    let tipCalculation = (billAmount)*(tip_percentageValue) /100;

    tipamountElement.value = tipCalculation;

    let tax_Calucation = (billAmount)*(tax_percentageValue) /100;

    let totalamountResult = Math.ceil( billAmount + tipCalculation + tax_Calucation);

    totalamountElement.value = totalamountResult;

    
    if( billamountElement.value ==="" ){

        consoleMessageField.textContent = "Please provide the amount ";

    }

    else if (typeof(billamountElement.value) !== "number"){

        consoleMessageField.textContent = "Please provide the  Vaild Input";

    }

}
