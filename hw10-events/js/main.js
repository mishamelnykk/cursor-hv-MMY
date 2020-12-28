    const keys = document.querySelectorAll('.key');
    let singl = '';
    const surchKeyEv = function (e) {
        if (singl !== '') {stopAudio(singl);}
        keys.forEach((key) =>{ 
            key.classList.remove(`playing`);
            // console.log(e.code)
            // console.log(key.id)
            if (e.code === key.id){
            // if (e.key.toUpperCase().charCodeAt() === +key.id){
                key.classList.add(`playing`);
                singl = new Audio(
                    `src/${Math.floor(Math.random() * 6 + 1)}.mp3`);
                singl.play();
            }
        })  
    } 
    document.addEventListener(`keydown`, surchKeyEv);
    keys.forEach((key) => key.addEventListener(`click`, function (e) {
        keys.forEach((key) => {
            key.classList.remove(`playing`);
            if (singl !== '') {stopAudio(singl);}
         })
        key.classList.add(`playing`);
        singl = new Audio(
            `src/${Math.floor(Math.random() * 6 + 1)}.mp3`);
        singl.play();
        
       
    }));
    function stopAudio(audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    