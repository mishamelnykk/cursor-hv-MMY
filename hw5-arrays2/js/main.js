//1
const getRandomArray = function (length, min, max){
    const newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return newArray;
}

//5
const filterEvenNumbers = function(...numbers){
    return numbers.filter((numb) => numb % 2);
}
//3
const getAverage = function(...numbers){
    const intNumbers = numbers.filter(number =>  parseInt(number) === number);
    const sumNumbers = intNumbers.reduce((total, number) => {
        return total + number;
    }, 0);
    console.log(sumNumbers);
    return +(sumNumbers / numbers.length).toFixed(2);
}
//4 
const getMedian = function (...numbers){
    const intNumbers = numbers.filter(number =>  parseInt(number) === number);
    const sortArr = numbers.sort((aNumb, bNumb) => aNumb - bNumb);
    if(numbers.length % 2) {
        return sortArr[parseInt(sortArr.length / 2)];
    } else{
        return (sortArr[parseInt(sortArr.length / 2)] + sortArr[(parseInt(sortArr.length / 2)) - 1]) / 2;
  }
}
//6
const countPositiveNumbers = function(...numbers){
    return numbers.filter((numb) => numb > 0).length;
}
//7
const getDividedByFive = function (...numbers){
    return numbers.filter((numb) => !(numb % 5));
}

console.log(getRandomArray(14, 2, 14));
console.log(filterEvenNumbers(1, 2, 3, 4, 5));
console.log(getAverage(1, 2, 3, 4, 6, 8, 12.1));
console.log(getMedian(1, 2, 3, 4, 4, 4, 5, 12));
console.log(countPositiveNumbers(1, 0, -3, 2, 4, -5))
console.log(getDividedByFive(5, 3, 44, 55));