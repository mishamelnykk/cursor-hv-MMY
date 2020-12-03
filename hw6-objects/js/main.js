const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

const getSubjects = (nameStudent) => {
    const someStudent = students.find((student) => student.name === nameStudent);
    return Object.keys(someStudent.subjects).map((student) => 
    student.replace(`_`, ` `).replace(student[0], student[0].toUpperCase()));
    // student[0].toUpperCase() + student.slice(1).replace(`_`, ` `));
}
const getAverage = function(...numbers){
    // console.log(numbers);
    const intNumbers = numbers.filter(number =>  parseInt(number) === number);
    const sumNumbers = intNumbers.reduce((total, number) => {
        return total + number;
    }, 0);
    // console.log(sumNumbers);
    return +(sumNumbers / numbers.length).toFixed(2);
}
const getAverageMark = (nameStudent) => {
    const someStudent = students.find((student) => student.name === nameStudent);
    return getAverage(...Object.values(someStudent.subjects).reduce((total, marks) => total.concat(marks)));
} 
const getStudentInfo = (nameStudent) => {
    const someStudent = students.find((student) => student.name === nameStudent);
    const {course, name, ...other} = someStudent;
    return {course, name, averageMark : getAverageMark(nameStudent)};
}
const getStudentsNames = (students) =>{
    return students.map((student) => student.name).sort();
}
const getBestStudent = (students) => {
    let bestStudent = '';
    let averageMark = 0;
    getStudentsNames(students).map((student) => {
        if (averageMark < getAverageMark(student)) {
            averageMark = getAverageMark(student);
            console.log(averageMark);
            bestStudent = student;
        }
    })
    return bestStudent;
}
const calculateWordLetters = (word) => {
let result = {};
    word.split('').map((letter) => {
    if (result[letter]) {
         result[letter]++;
      } else {
         result[letter] = 1;
      }
   });
   return result;
};
  

console.log (getSubjects(`Tanya`));
console.log(getAverageMark(`Victor`));
console.log(getStudentInfo(`Tanya`));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters(`test`));
// console.log(students)

