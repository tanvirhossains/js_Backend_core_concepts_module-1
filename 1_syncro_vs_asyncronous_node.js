/*    30 april 2023 */
var colors = require('colors');


console.log("this is ".magenta);


function compute(a, b) {
    if (a < 10) {
        return a + 15;
    } else {
        return b + 35;
    }
}

// this setTimout fuction called callback hell 
setTimeout(() => {
    console.log("set timeout log".bgGreen);
    setTimeout(() => {
        setTimeout(() => {
            console.log("set time out 500".bgCyan);
        }, 500);
        console.log('set time out 800'.bgRed);
    }, 800);

}, 2000);
// in this function readability is hard that is whay it is called callback hell



console.log("this is red".red);
console.log("this is no color");
const value = compute(10, 20)
console.log(value, "valu>>".green);