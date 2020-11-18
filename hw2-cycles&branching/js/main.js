// отримання  1 числа
let numberOneOfRange = parseInt(prompt(`Введіть перше число`)); 

let audit = false;
do{
    if(isNaN(numberOneOfRange)){
    numberOneOfRange = parseInt(prompt(`Це не число, введіть перше число`));
    }else{
            audit = true;
        }
    }while(audit === false);
//отримання 2 числа
let numberTwoOfRange = parseInt(prompt(`Введіть друге число більше за попереднє`)); 
audit = false;

do{
    if(isNaN(numberTwoOfRange) || numberTwoOfRange <= numberOneOfRange){
        numberTwoOfRange = parseInt(prompt(`Це не число або менше за попереднє, введіть друге число`));// 
    }else{
        audit = true;
        }
    }while(audit === false);

const skipEvenNumbers = confirm(`Пропустити парні числа?`);

let sumNumberFromRange = 0;
//складання чисел
if(skipEvenNumbers){
    for(let i = numberOneOfRange; i <= numberTwoOfRange; i++){
        if(!((i % 2) === 0)){
            sumNumberFromRange = sumNumberFromRange + i;
        }
    }
}else{
    for(let i = numberOneOfRange; i <= numberTwoOfRange; i++){
        sumNumberFromRange = sumNumberFromRange + i;
    }
}
console.log(`Сума числел : ${sumNumberFromRange}`);
