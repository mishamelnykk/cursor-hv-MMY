async function getRandomChinese (length) {
let chineseString = ``;
let count = 0;
while (count !== length) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    chineseString += makeChineseChar();
    count++;
}
return chineseString;
}

const makeChineseChar = () => {
    const now = Date.now();
    return String.fromCharCode(now.toString().slice(-5))
}


getRandomChinese(4)
    .then((result) => console.log(result))

