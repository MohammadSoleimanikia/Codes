// npm i inquirer qr-image
// set type to module for Ecma script module 
import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    // question is an object message : The question to print.
    // name: 
    {"message":"please give your URL"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });