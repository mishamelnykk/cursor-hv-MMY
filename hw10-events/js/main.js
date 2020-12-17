    const keys = document.querySelectorAll('.key');
    const surchKeyEv = function (e) {
        keys.forEach((key) =>{ 
            key.classList.remove(`playing`);
            if (e.key.toUpperCase().charCodeAt() == key.id){
                key.classList.add(`playing`);
                new Audio(
                    `src/${Math.floor(Math.random() * 6 + 1)}.mp3`
                ).play();
            }
        })  
    } 
    document.addEventListener(`keydown`, surchKeyEv);
    