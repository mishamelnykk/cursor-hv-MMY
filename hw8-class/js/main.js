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
        return this.marks;
    }
    set setmarks(mark){
        this.marks.push(mark);
    }
    get getAverageMark(){
        const sumNumbers = this.marks.reduce((total, number) => {
            return total + number;
        }, 0);
        // console.log(sumNumbers);
        return +(sumNumbers / this.marks.length).toFixed(2);
    }
    dismiss(){
        return this.status = false;
    }
    recover(){
        return this.status = true;
    }

}



const misha = new Student(`НУЛП`, 1, `Михайло Мельник`);
const bodia = new Student(`ЛНУ ім. І.Франка`, 5, `Voichyshyn Bogdan`)
console.log(misha)
console.log(misha.getInfo());
console.log(misha.getmarks);
console.log(misha.getAverageMark)
