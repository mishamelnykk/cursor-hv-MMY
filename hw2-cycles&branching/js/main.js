let numberOne = prompt(`Введіть перше число`); 
// numberOne = parseInt(numberOne);
console.log(numberOne);
let audit = false;
do{
    if(parseInt(isNaN(numberOne))){
    numberOne = prompt(`Це не число, введіть перше число`);
    }else{
            audit = true;
        }
    }while(audit === false);
    // console.log(audit);
    // console.log(numberOne);
let numberTwo = parseInt (prompt(`Введіть друге число більше за попереднє`)); 
audit = false;

do{
    if(isNaN(numberTwo) || numberTwo <= numberOne){
        numberTwo = parseInt (prompt(`Це не число або менше за попереднє, введіть друге число`));
    }else{
        audit = true;
        }
    }while(audit === false);

const skipEvenNumbers = confirm(`Пропустити парні числа?`);
console.log(skipEvenNumbers);

