var billamountElement = document.getElementById("billamountField");

var tip_percentageElement = document.getElementById("tip_percentageField");

var tipamountElement = document.getElementById("tipamountField");

var totalamountElement = document.getElementById("totalamountField");

var consoleMessageField = document.getElementById("errormessageField");

function caluteButton(){

    let billAmount = parseInt(billamountElement.value);

    let tipAmount = parseInt(tipamountElement.value);

    let totalAmount = parseInt(totalamountElement.value);


    let tip_percentageValue = 3;

    let tipCalculation = (billAmount)*(tip_percentageValue) /100;

    tipamountElement.value = tipCalculation;


    let tax_percentageValue = 5;

    let tax_Calucation = (billAmount)*(tax_percentageValue) /100;


    let usertip_percentage = parseInt(tip_percentageElement.value);

    let usertip_calculation = (billAmount)*(usertip_percentage) / 100;


    // Tip calucation 

    if (tip_percentageElement.value === ""){

        let totalamountResult = Math.ceil( billAmount + tipCalculation + tax_Calucation);

        totalamountElement.value = totalamountResult;

        tip_percentageElement.value = tip_percentageValue;

    }

    else {

        let totalamountResult = Math.ceil( billAmount + usertip_calculation + tax_Calucation );

        totalamountElement.value = totalamountResult;

    }

    // Error Message Alert
    
    if( billamountElement.value ==="" ){

        consoleMessageField.textContent = "Please provide the amount ";

    } 

    else if (isNaN(Number(billamountElement.value))){

        consoleMessageField.textContent = "Please provide the Vaild Input";

    }

}
