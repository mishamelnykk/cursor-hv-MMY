const getRadomColor = () => {
    const newColor = '#' + (Math.random().toString(16)).substring(2,8).toUpperCase();
    return newColor;
}
const createPlace = () => {
    const place = document.createElement(`div`);
    place.classList.add('container');
    place.style.width = "250px";
    place.style.height = "250px";
    place.style.display = "flex"
    place.style.flexWrap = "wrap"
    document.body.append(place);
    return place;
}
const createBlock = () => {
    const block = document.createElement(`div`);
    block.style.width = "50px";
    block.style.height = "50px";
    block.style.backgroundColor = getRadomColor();
    return block;
}
const generateBlocks = (element) => {    
    for (let i = 0; i < 25; i++) {
        element.append(createBlock()); 
    }
}
const generateBlocksInterval = () => {
    const place = createPlace();
   
    setInterval(() => {
        place.innerHTML = '';
        generateBlocks(place)
    }, 1000)
}
// generateBlocks();
generateBlocksInterval();