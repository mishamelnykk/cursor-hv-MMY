class Student {
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = Array(4).forEach(element => el = Math.floor(Math.random() * 6)) ;

    }

    getInfo(){
       return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }
    
    get getmarks(){
        return this.marks;
    }

}



const misha = new Student(`НУЛП`, 1, `Михайло Мельник`);
const bodia = new Student(`ЛНУ ім. І.Франка`, 5, `Voichyshyn Bogdan`)
console.log(misha)
console.log(misha.getInfo());
console.log(misha.getmarks);
