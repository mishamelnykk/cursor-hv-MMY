
const result = document.querySelector(`.result`);
const nextPage = document.querySelector(`.buttonNext`);
const mainButton = document.querySelector(`.buttonMain`);
let url = '';

const showPersons = function() {
    axios.get(`https://swapi.dev/api/films/${numberOfFilms}`)
        .then((res) => {
            let persons = res.data.characters;
            lang = document.querySelector(`#langValue`).value;
            if(lang === `1`){
                persons.forEach(e => {
                    axios.get(e)
                        .then((res) => {
                            makePersonBox(res);
                        })
                    })
                }else{
                    persons.forEach(e => {
                        axios.get(e + `?format=wookiee`)
                            .then((res) => {
                                makePersonBoxWookiee(res);
                            })
                        })
                }

            // persons.forEach(e => {
            //     axios.get(e)
            //         .then((res) => {
            //             makePersonBox(res);
            //         })
            //     })
    })
}
const makePersonBox = (res) => {
    const box = document.createElement(`div`);
    box.classList.add(`personBox`);

    const namePerson = document.createElement(`div`);
    namePerson.classList.add(`namePerson`);
    namePerson.innerHTML = `Name: ` + res.data.name;
    box.append(namePerson);

    const birthDay = document.createElement(`div`);
    birthDay.classList.add(`birthDay`);
    birthDay.innerHTML = `Birth Day: ` + res.data.birth_year;
    box.append(birthDay);

    const gender = document.createElement(`div`);
    gender.classList.add(`genderPerson`);
    gender.innerHTML = `Gender: ` + res.data.gender;
    box.append(gender);

    result.append(box);
}

const makePersonBoxWookiee = (res) => {
    const box = document.createElement(`div`);
    box.classList.add(`personBox`);

    const namePerson = document.createElement(`div`);
    namePerson.classList.add(`namePerson`);
    namePerson.innerHTML = `Whrascwo: ` + res.data.whrascwo;
    box.append(namePerson);

    const birthDay = document.createElement(`div`);
    birthDay.classList.add(`birthDay`);
    birthDay.innerHTML = `Rhahrcaoac_roworarc: ` + res.data.rhahrcaoac_roworarc;
    box.append(birthDay);

    const gender = document.createElement(`div`);
    gender.classList.add(`genderPerson`);
    gender.innerHTML = `Rrwowhwaworc: ` + res.data.rrwowhwaworc;
    box.append(gender);

    result.append(box);
}


mainButton.addEventListener("click", () => {
    const boxs = document.querySelectorAll(`.personBox`);
    if (boxs.length > 0) {
      boxs.forEach((box) => box.remove());
    }
    numberOfFilms = document.querySelector(`#selectvalue`).value;
    showPersons();
})

nextPage.addEventListener("click", () => {
            window.location.href = "planets.html";  
    
});
