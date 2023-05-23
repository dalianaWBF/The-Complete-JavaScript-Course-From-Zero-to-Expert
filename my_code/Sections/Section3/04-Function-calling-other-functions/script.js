'use strict';

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
    return juice; 
}

const appleJuice = fruitProcessor (5, 10);
console.log (appleJuice);