"use strict";
console.clear();

/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 Stampare a schermo la bici con peso minore.*/



const biciclette = [
    {
        nome: "FWhistle",
        peso: 30
    },

    {
        nome: "Basso",
        peso: 20
    },
    {
        nome: "Bianchi",
        peso: 35
    },
    {
        nome: "Bottecchia",
        peso: 22
    }
];

let biciLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {


    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i]
    }
}

console.log(biciLeggera);









