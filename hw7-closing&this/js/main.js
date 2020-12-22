const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };   

const getMyTaxes = function(salary){
    return +(salary * this.tax).toFixed(2);
}
const getMiddleTaxes = function(){
    return this.tax * this.middleSalary;
}
const getTotalTaxes = function(){
    return this.tax * this.middleSalary * this.vacancies;
}

const getMySalary = function() {
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500); 
    // console.log(this)
    const taxes = +(this.tax * salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);
    let timerId = setInterval(function(){console.log(
        {
            salary,
            taxes,
            profit
        }
    )}, 10000);
    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 100000);
    return {
        salary,
        taxes,
        profit
    };
}



console.log(getMyTaxes.call(ukraine, 40000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));
console.log(getMySalary.call(ukraine));
