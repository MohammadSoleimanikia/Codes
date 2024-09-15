// npm i inquirer qr-image
// set type to module for Ecma script module
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    // question is an object. message : The question to print.
    // name: to use when storing answer
    { message: "please give your URL",
       name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!    
    const url=answers.URL;
    var qr_svg = qr.image(url);
    // write it in a file 
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
