const boxPlanets = document.querySelector(`.planets`);
axios.get(`https://swapi.dev/api/planets/`)
        .then((res) => {
            const planets = res.data.results;
            planets.forEach(e => {
                const namePlanet = document.createElement(`div`);
                namePlanet.classList.add(`planet`);
                namePlanet.innerHTML = '' + e.name;
                boxPlanets.append(namePlanet)
        })
    })
