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
            console.log('%c You HIT the alien ship!', 'color: green');
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
            console.log('%c You have been HIT!', 'color: red')
        } else {
            console.log('They missed!')
        }
    }
}




// CREATING USS HelloWorld

const USSHW = new USSHelloWorld();
// console.log(USSHW);





//CREATING alienHorde

for(let i = 0; i < 6; i++) {
    alienHorde.push(new AlienShip(randomPropertyInt(maxHull, minHull), randomPropertyInt(maxFirepower, minFirepower), randomPropertyDec(maxAccuracy, minAccuracy)));
}
// console.log(alienHorde);

// =================================================== \\

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

// Retreat Function pseudocode
Basic retreat is after a battle, the retreat button can show up for the DOM stuff. You click yes or no. if yes, then we can end the game with options of returning later.

For the non-dom portion the retreat will show up in the console and recieve a user input (y: keep attack, n: return home)
*/

// =================================================== \\




// Retreat Function

//I was having trouble with the prompt function. I am not able to even see a prompt in the console of the DOM or on my console in VSCode. I also tried window.prompt() and did not get anything.

const decision = (USSHW) => {
    if(USSHW === hasWinner){
        if(prompt('If you want to stay and attack, type: y. If you want to return home, type: n.') === null){
            battle(USSHW, ship);
        } else {
            console.log('I am returning home to regroup and come back for more.')
        }
    }
}






// Champion Function

const champion = (USSHW, ship) => {
    // console.log(alienHorde);
    // console.log(USSHW);

    let winner;
    hasWinner = true;
    if(USSHW.hull > 0 && ship.hull <= 0){
        winner = USSHW;
        console.log('%c USS HelloWorld wins! You have destroyed the alien ship.', 'font-size: 25px');
    }else if(ship.hull > 0 && USSHW.hull <= 0){
        winner = ship;
        console.log('%c The alien ship won! You have been destroyed.', 'font-size: 25px');
    } return winner;
}

// ==================Old Battle Func=================== \\

// Battle Function

// const battle = (USSHW, alienHorde) => {
//     console.log(alienHorde);
//     console.log(USSHW);

//     while(!hasWinner){
//         if(USSHW.hull > 0 && alienHorde[0].hull > 0){
//             USSHW.attack(alienHorde[0]);
//         } else {
//             return champion(USSHW, alienHorde);
//         }
//         if(USSHW.hull > 0 && alienHorde[0].hull > 0){
//             alienHorde[0].attack(USSHW);
//         } else {
//             return champion(USSHW, alienHorde);
//         }
//     }
// }

// battle(USSHW, alienHorde);





// ==================New Battle Func=================== \\

const battle = (USSHW, ship) => {
    // alienHorde.forEach((ship) => {
    
    console.log("")
    console.log("=====================================")
    console.log('%c Battle Stats', 'font-size: 30px');
    console.log("=====================================")
    console.log(USSHW);
    console.log(ship);
    console.log("=====================================")
    console.log("")

        while(!hasWinner){
            if(USSHW.hull > 0 && ship.hull > 0){
                USSHW.attack(ship);
            } else {
                return champion(USSHW, ship);
            }
            if(USSHW.hull > 0 && ship.hull > 0){
                ship.attack(USSHW);
            } else {
                return champion(USSHW, ship);
            }
        }
// });
}

// battle(USSHW, alienHorde);






const war = (USSHW, alienHorde) => {
    alienHorde.forEach((ship) => {
        hasWinner = false;

        battle(USSHW, ship);
        // decision(USSHW);


        // ===============Old War Logic=============== \\
        // if(ship.hull > 0){
        //     battle(USSHW, ship)
        // } else {
        //     return champion(USSHW, alienHorde);
        // }
        // if(USSHW > 0){
        //     battle(USSHW, ship)
        // } else {
        //     return champion(USSHW, alienHorde);
        // }
    })
}

war(USSHW, alienHorde);

/* ====================================================
                    DOM Manipulation
   ==================================================== */

// Query Selectors

const helloWorld = document.querySelector('#USSHW');
const aliens = document.querySelector('#aliens');

const textBox = document.createElement('div');
textBox.textContent = "THIS WAS SUPPOSED TO BE CONSOLE LOGGED INFO:::: Lorem ipsum dolor sit amet consectetur adipisicing elit. In distinctio impedit itaque recusandae, autem adipisci asperiores excepturi ipsam alias iure ullam assumenda doloribus vel suscipit facilis inventore, sed, accusamus commodi! Eos illum veritatis maxime adipisci tempore odit ex eaque quam incidunt eum laboriosam voluptates mollitia ipsa, in corrupti dignissimos pariatur nulla dolores praesentium omnis cupiditate quod doloribus. Aperiam, ex quaerat? Nobis nam unde ratione aliquid amet, obcaecati sapiente minima saepe ullam sequi exercitationem dignissimos impedit quibusdam, rerum eos quasi earum. Labore beatae, assumenda ad reiciendis et deleniti odio perspiciatis dolores? Eaque iusto, repudiandae nostrum deserunt hic asperiores nihil eius consequatur, itaque quidem magnam. Dignissimos nulla excepturi itaque voluptatum incidunt dicta impedit. Voluptatem a illum ratione odit corporis ipsam, fuga velit. Consequuntur sint, dolore quas consequatur ipsa impedit labore excepturi? Exercitationem molestiae maxime, explicabo reprehenderit sequi eaque quae porro vitae asperiores eos eius dolore repellat, praesentium adipisci quibusdam, cum alias accusantium!";
textBox.classList.add('text-box');

// Creating console.log to add to the DOM
function print(value) {
    console.log(value)
}

// Appending the clg to the DOM
document.body.appendChild(textBox);


//THING TO DO
    //Figure out prompt() and finish the repeat function
    //Figure out how to console log on the DOM and create my star wars animation console logging the battle
    //Create animations between the USSHW and the alien ships shooting when they "hit" in the attack function