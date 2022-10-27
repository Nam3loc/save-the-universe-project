// VARIABLE DECLARATIONS

const randomizer = () => {
    return Math.random();
}

const alienHorde = [];

let hasWinner = false;

// MAX & MIN FOR alienHorde RANDOMIZER
let maxHull = 6;
let minHull = 3;

let maxFirepower = 4;
let minFirepower = 2;

let maxAccuracy = 0.8;
let minAccuracy = 0.6;

const randomPropertyInt = (max, min) => {

    // find diff
    let difference = (max - min) + 1;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

const randomPropertyDec = (max, min) => {

    // find diff
    let difference = (max - min);

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = (rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

// CLASSES

class USSHelloWorld {
    constructor(hull = 20, firepower = 5, accuracy = 0.7) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(alienShip) {
        if(this.accuracy > randomizer()){
            alienShip.hull -= this.firepower;
            console.log('You hit the alien ship!')
        } else {
            console.log('You missed!');
        }
    }
}

class AlienShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(USSHW) {
        if(this.accuracy > randomizer()){
            USSHW.hull -= this.firepower;
            console.log('You have been hit!')
        } else {
            console.log('They missed!')
        }
    }
}

// CREATING USS HelloWorld

const USSHW = new USSHelloWorld();
// console.log(USSHW);

//CREATING alienHorde

for(let i = 0; i < 2; i++) {
    alienHorde.push(new AlienShip(randomPropertyInt(maxHull, minHull), randomPropertyInt(maxFirepower, minFirepower), randomPropertyDec(maxAccuracy, minAccuracy)));
}
// console.log(alienHorde);

// BATTLE

/*
Battle Pseudocode

USSHW vs AlienShip (alienHorde[0])
USSHW attacks first
if alienHorde[0].hull > 0 then they attack
if USSHW.hull > 0 then they attack
so on and so forth until someone runs out of HP


const battle = (USSHelloWorld, alienHorde[0]) => {
    do{
        USSHelloWorld.attack(alienHorde[0]);
        alienHorde[0].attack(USSHelloWorld);
    }
    while(USSHelloWorld.hull > 0 && alienHorde[0].hull > 0)
}

//...I feel like this isnt the most accurate. I want it to check the condition after every attack\\

//=========FIRST TRY BEFORE CHRISTINA HELPED=========\\

// for(let i = 0; i < 100; i++){
//     if(USSHW.hull > 0 && alienHorde[0].hull > 0){
//         USSHW.attack(alienHorde[0]);
//     } else {
//         return champion(USSHW, alienHorde);
//     }
//     if(USSHW.hull > 0 && alienHorde[0].hull > 0){
//         alienHorde[0].attack(USSHW);
//     } else {
//         return champion(USSHW, alienHorde);
//     }
// } 

//=========FIRST TRY BEFORE CHRISTINA HELPED=========\\

We need to loop this... so put the 2 if statements in a for loop?

We need an if statement that say 
    if(one of the ships < 0){
        return ship > 0 is the winner
    }

    if(USSHW.hull > 0 && alienHorde[0].hull < 0){
        winner = USSHW;
    } else if(alienHorde[0].hull > 0 && USSHW.hull < 0){
        winner = alienHorde[0];
    }

and we need a return that returns the winner of the battle
*/

// Champion Function

const champion = (USSHW, alienHorde) => {
    console.log(alienHorde);
    console.log(USSHW);

    let winner;
    hasWinner = true;
    if(USSHW.hull > 0 && alienHorde[0].hull <= 0){
        winner = USSHW;
        console.log('USS HelloWorld wins!');
    }else if(alienHorde[0].hull > 0 && USSHW.hull <= 0){
        winner = alienHorde[0];
        console.log('The alien ship won!');
    } return winner;
}

// Battle Function

const battle = (USSHW, alienHorde) => {
    console.log(alienHorde);
    console.log(USSHW);

    while(!hasWinner){
        if(USSHW.hull > 0 && alienHorde[0].hull > 0){
            USSHW.attack(alienHorde[0]);
        } else {
            return champion(USSHW, alienHorde);
        }
        if(USSHW.hull > 0 && alienHorde[0].hull > 0){
            alienHorde[0].attack(USSHW);
        } else {
            return champion(USSHW, alienHorde);
        }
    }
}

battle(USSHW, alienHorde);



