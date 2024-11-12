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

// console.log(biciLeggera);

/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const footballTeam = [

    {
        name: "Inter",
        pointsScored: 0,
        sufferedFouls: 0

    },
    {
        name: "Juventus",
        pointsScored: 0,
        sufferedFouls: 0

    },
    {
        name: "Milan",
        pointsScored: 0,
        sufferedFouls: 0

    },
    {
        name: "Napoli",
        pointsScored: 0,
        sufferedFouls: 0

    }

];
const footballTeamRestrict = []

for (let i = 0; i < footballTeam.length; i++) {
    const valueAssignPoints = randomNumbersGenerator(1, 100);
    const valueAssignFouls = randomNumbersGenerator(1, 1000);
    const team = footballTeam[i];
    team.pointsScored = valueAssignPoints;
    team.sufferedFouls = valueAssignFouls;

    footballTeamRestrict.push(team.name, team.sufferedFouls);
}

// console.log(footballTeam);
// console.log(footballTeamRestrict);

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


const fullArray = ["Carlo", "Matteo", "Fabio", "Ignazio", "Luca"]

const restrictArray = contentBetweenGenerator(fullArray, 2, 3);
console.log(restrictArray);
























