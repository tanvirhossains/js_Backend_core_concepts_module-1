// console.log(module);

/* 🫡🫡 this is commonjs type exporting system */

/* option:4 > inline exporting the function , it will work as option 2 */
module.exports.handle = function handleError(error) {
    console.log(error);
    //name: what type of erro it is,(typeerro, syntex error) message: what it the message according to the error (find not a function )
    const { name, message, stack } = error
    console.log(message);
    // logger.error(
    //     {
    //         name,
    //         message,
    //         stack,
    //         rs
    //     }
    // )
    console.log("Inter nal server error!".red); // we don't show the error to the user because of securiry but we show some notice link this.
}


/* option:4 > inline exporting the function , it will work as option 2 */
module.exports.two = function two() {
    console.log("two".bgCyan);
}

// module.exports = handleError; // if only one function have to export in common js type

/* option:2 >  if we export more than one function then this the way in commonjs type */
// module.exports.handle = handleError;
// module.exports.two = two;


/* option 3: >> it will be work same in as option 2 in commonjs type */

/* module.exports = {
    handle: handleError,
    two: two
} */

// we also can change the name of the function name 

console.log(module);