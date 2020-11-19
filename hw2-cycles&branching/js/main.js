
    let numberOneOfRange = +prompt(`Введіть перше число`);
    let numberTwoOfRange = +prompt(`Введіть друге число більше за попереднє`);
    let sumNumberFromRange = 0;

    while(!Number.isInteger(numberOneOfRange ) || !numberOneOfRange ) {
    numberOneOfRange = +prompt(`Це не число, введіть перше число`);
    }
    
    while(numberTwoOfRange < numberOneOfRange || !Number.isInteger(numberTwoOfRange ) || !numberTwoOfRange ) {
        numberTwoOfRange = +prompt(`Це не число або менше за попереднє, введіть друге число`);
    }

    const skipEvenNumbers = confirm(`Пропустити парні числа?`);

    for(let i = numberOneOfRange; i <= numberTwoOfRange; i++){
        if(skipEvenNumbers && i % 2 === 0){
            continue;
        }else{
            sumNumberFromRange += i;
        }
    }
    console.log(`Сума числел : ${sumNumberFromRange}`);
