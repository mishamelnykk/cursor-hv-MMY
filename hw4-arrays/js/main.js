const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//1
const getPairs = (students) => {
    const boys = [];
    const girls = [];
    const pairs =[];

    for (let i = 0; i < students.length; i++) {
        if (students[i].slice(-1) === "а") {
            girls.push(students[i]);
        }else{
            boys.push(students[i]);
        }
    }
    for (let i = 0; i < (students.length / 2); i++) {
        pairs.push([boys[i], girls[i]]);
    }
    return pairs;
}
//2
const getPairsWithThemes = (pairs, themes) => {
    const arrPairsWithThemes = [];
    for (let i = 0; i < themes.length; i++) {
        arrPairsWithThemes.push([pairs[i].join(` і `), themes[i]]);
        // console.log(arrPairsWithThemes [i]);
    }
    return arrPairsWithThemes; 
}
//3
const getMarksAndStudets = (students, marks) => {
    const arrMarksAndStudents = [];
    for (let i = 0; i < students.length; i++) {
        arrMarksAndStudents.push([students[i], marks[i]]);
    }
    return arrMarksAndStudents;
}
//4
const getRandomMarksOfStudentForProgect = () => {
    const arrRandomMarksOfStudentForProgect = [];
    for (let i = 0; i < pairsWithThemes.length; i++) {
        let copy = [...pairsWithThemes[i]]
        copy.push(Math.floor(Math.random() * (5 - 1 + 1)) + 1);    
        arrRandomMarksOfStudentForProgect.push(copy);
    }
    return arrRandomMarksOfStudentForProgect;
}


const pairs = getPairs(students);
console.log(pairs);
const pairsWithThemes = getPairsWithThemes(pairs, themes);
console.log (pairsWithThemes);
console.log(getMarksAndStudets(students, marks));
console.log(getRandomMarksOfStudentForProgect());

  