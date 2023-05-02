// const colors = require("colors")



/*😒😒😒 this is commonjs type exporting system  */
// const handleError=  require('./5_exprot')
// const {handle, two} = require('./5_exprot')


/* if i export without default then i have run like this way */
import {two, handleError}  from "./5_1_export_module_type.js";

two()
// error handling means when we find any error in the website the we don't show to the user for security purpose then we hide this error from user to solve it later. 
async function errorHandeling() {
    try {


        undefined.find(); 
        /* some times we can see same eamil in the server then if user type same email for create new then we send this type of error to the user  */
        // const emailError = new Error("Eamil already exist!!!")
        // throw emailError;
    } catch (error) {
        handleError(error);
        // handle(error)

    }

}

/* i will exprot this function form the other file */
/* function handleError(error) {
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
} */


errorHandeling()
console.log('done');