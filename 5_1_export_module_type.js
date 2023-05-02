// console.log(module);

/* 🫡🫡 this is module type exporting system,
it work like react exort and importing system */

export function handleError(error) {
    // console.log(error);
    
// const colors = require('colors')

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
    console.log("Inter nal server error!"); 

}
export  function two() {
    console.log("two");
}



// console.log(module);
// export default handleError;