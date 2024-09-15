// type npm init in terminal
// package.json added 
// install package with npm install sillyname
// package added to the dependencies in package.json
// use package 

// add package common js (old version)
// var generateName=require("sillyname");

// Ecma script module (new version)
// import methodName from "packageName"
import  generateName from "sillyname";
// if we get "cannot ues import statement outside a module" error
//add "type":"modules" to package.json 
var sillyName=generateName();
console.log(sillyName);

// add package ecma script modules
