function* createIdGenerator (i = 1) {
    while (true) {
        yield console.log (i);
        i++;
    }
}
const idGenerator = createIdGenerator();
idGenerator.next().value;
idGenerator.next().value;
idGenerator.next().value;

function* newFontGenerator (mainFontSize) {
    let value = mainFontSize;
    while(true) {
            const action = yield value;
            if(action === 'up'){
               value +=2;
            }else if(action === 'down'){
                value -=2
            }
          }
}

const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value); 
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value); 
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);