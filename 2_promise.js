/* 30 april 2023 */

const colors = require('colors');  // this line won't work in module type seted
// 3 state of promise

//pending 


//resolve


//rejected

// promise is a constructor if any constructor have to called then we have to use "new" key word to 

//...................... getting data using promise 
const myPromise = new Promise((resolve, reject) => {
    const user = { id: "data" }; // it will resolve the promise
    // const user = null;       // it will rejec the promise 

    if (!user) {
        reject("somethings went wrong in promise".red)
    } else {
        setTimeout(() => {
            resolve("succesfully got the data".green)
        }, 1000)
    }
})

/* 
this is the way of cosuming the data form the promise 
.then >> give the resolve data
.catch >> give the error data or rejected data s */
/* promise work asyncronous way */
myPromise
    .then(res => console.log("found in then :", res))
    .catch(err => console.log("found in catch", err))


// getting value using promise, remember loop always give synchronous value 

const userIds = [1, 3, 4, 5, 76, 8]
let userData = []

// for loop work syncronours way
for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i]

    userData.push(userId)
    /*   will get [] if write this 
    promise work asyncronous way */
    // myPromise
    // .then(user => {
    //     userData.push(user)
    // })

    userData.push(myPromise)
}

// Promise.all(userData).then(result => {
//     // console.log(result)
// })

console.log("userData".red, userData)

