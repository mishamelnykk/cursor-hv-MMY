let persons = [];
const result = document.querySelector(".result");
let numberOfFilms = 2;
axios.get(`https://swapi.dev/api/films/${numberOfFilms}/`)
    .then((res) => {
        persons = res.data.characters;
        persons.forEach(e => {
            axios.get(e)
                .then((res) => {
                    makePersonBox(res);
                })
            })
    })
        
const makePersonBox = (res) => {
    const box = document.createElement("div");
    box.classList.add(`personBox`);

    const namePerson = document.createElement("div");
    namePerson.classList.add("namePerson");
    namePerson.innerHTML = res.data.name;
    box.append(namePerson);

    const birthDay = document.createElement("div");
    birthDay.classList.add("birthDay");
    birthDay.innerHTML = res.data.birth_year;
    box.append(birthDay);

    const gender = document.createElement("div");
    gender.classList.add("genderPerson");
    gender.innerHTML = res.data.gender;
    box.append(gender);

    result.append(box);
}




const nextPage = document.querySelector(".buttonNext");

nextPage.addEventListener(
    "click",
    () => (window.location.href = "planets.html")
  );