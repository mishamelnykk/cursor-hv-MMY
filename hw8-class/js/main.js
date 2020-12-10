class Student {
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = Array(4).fill().map(()=> Math.floor(Math.random() * 5 + 1)) ;
        this.status = true;
    }

    getInfo(){
       return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
    
    get getmarks(){
        if(this.status){
        return this.marks;
        }else {
            return null;
        }
    }
    set setmarks(mark){
        if(this.status) {
            this.marks.push(mark)
        };
    }
    get getAverageMark(){
        if(this.status){
        const sumNumbers = this.marks.reduce((total, number) => {
            return total + number;
        }, 0);
        return +(sumNumbers / this.marks.length).toFixed(2);
    }
    }
    dismiss(){
        console.log(`Ви виключені з навчального закладу`);
        return this.status = false;
    }
    recover(){
        console.log(`Ви поступили в навчальний заклад`);
        return this.status = true;
    }

}

class BudgetStudent extends Student {
    constructor(university, course, fullName){
        super(university, course, fullName);
        this.money = 1400;
        // this.getScholarship();
        setInterval(() => this.getScholarship(), 30000);
        
    }
    getScholarship(){
        // setInterval(() => {
        //     if(this.getAverageMark >= 3.0 && this.status){
        //         console.log(`Ви отримали ${this.money} грн. стипендії`) ;
        // }
        // }, 5000);
        if(this.getAverageMark >= 4.0 && this.status){
            console.log(`Ви отримали ${this.money} грн. стипендії`);
    }

}
}
    



const misha = new Student(`НУЛП`, 1, `Михайло Мельник`);
const bodia = new BudgetStudent(`ЛНУ ім. І.Франка`, 5, `Voichyshyn Bogdan`)
console.log(misha)
console.log(misha.getInfo());
console.log(misha.getmarks);
console.log(misha.getAverageMark)
misha.dismiss();
console.log(misha.getmarks)
console.log(bodia)
console.log(bodia.getAverageMark)



