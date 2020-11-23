
//1
const getMaxDigit = function(number){
    number = String(number).replace(`.`, '').replace(`,`, '');
    let maxNumber = 0;
    while(number !== 0){
        let lastDigitOfNumber = number % 10;
        if (maxNumber < lastDigitOfNumber){
            maxNumber = lastDigitOfNumber;
        }
        number = Math.floor(number / 10);
    }
    return maxNumber;
}
//4
const getSalaryWithoutTax = function (salary){
    const tax = 19.5;
    return salary - (salary * tax / 100);
}
//5
const getRandomIntegerNumber = function (minNumber, maxNumber){
    return Math.floor(Math.random() * (Math.round(maxNumber) - Math.round(minNumber) + 1)) + Math.round (minNumber);
}
//6
const getNumberLetterInWord = function (letter, word){
    const arrLattersInWord = String(word).split('');
    let countOfLatters = 0;
    for (let i = 0; i < arrLattersInWord.length; i++){
        if(arrLattersInWord [i] === letter){
            countOfLatters++;
        }        
    }
    return countOfLatters;
}
//7
const convertCurrency = function(money){
    let convertMoney = `Error`;
   const dollarValue = 28.50;
   if(money.slice(-3).toUpperCase() === `UAH`){
       console.log(money.slice(0, -3));
        convertMoney = +(money.slice(0, -3) / dollarValue).toFixed(2); //число зі стрічки витягнути
   } else if (money.slice(-1) === `$`) {
       convertMoney = dollarValue * money.slice(0, -1)//число зі стрічкивитягнути
   }
   return convertMoney;
}
//8
const getRandomPassword = function (lengthPassword = 8){
    return Math.random().toString().slice(2, +lengthPassword + 2);
}

//2
const getDegreeOfNumber = function(number, degree){
    let result = number;
    for(let i = 0; i < degree - 1; i++){
        result *= number;
    }
    return result;
}
//9
const deleteLetters = function (letter, word){
    const arrLattersInWord = String(word).split('');
    let newArrLattersInWord = [];
    for (let i = 0; i < arrLattersInWord.length; i++){
        if(arrLattersInWord [i] !== letter){
            newArrLattersInWord.push(arrLattersInWord[i]);
        }        
    }
    return newArrLattersInWord.join('');
}
//3
const getNameInFirstLatterUpper = function (name){
    const firstLatter = name.substring(0,1).toUpperCase();
    const wordWithoutFirstLatter = name.substring(1).toLowerCase();
    return firstLatter + wordWithoutFirstLatter;
}
//10
const isPalyndrom = function (sentence){
    return sentence === sentence.replace(' ', '').split('').reverse().join('');
}



console.log( getMaxDigit(prompt('Введіть число')) );
console.log(getSalaryWithoutTax (+prompt('Введіть зарплату')));
console.log(getRandomIntegerNumber(
    prompt(`Введіть нижні дапазон рандомного числа`),
    prompt('Введіть верхній діапазон рандомного числа'))
    );
console.log( getNumberLetterInWord(prompt(`Введіть букву`), prompt(`Введіть слово`)) );
console.log(convertCurrency(prompt(`ВВедіть валюту UAH або $`)));

const myLength = prompt(`Введіть довжину пароля або натисніть cancel для герерації позамовченню`);
    if (+myLength !== 0){
        console.log( getRandomPassword(myLength));
    }else console.log(getRandomPassword());
   
console.log(getDegreeOfNumber(prompt(`ВВедіть число`), prompt(`введіть степінь числа`)));
console.log(deleteLetters(prompt(`Введіть символ для видалення`), prompt(`Введіть речення`)));
console.log(getNameInFirstLatterUpper(prompt('введіть імя')));
console.log(isPalyndrom(prompt(`ВВедіть речення, яке може бути паліндромом`)));