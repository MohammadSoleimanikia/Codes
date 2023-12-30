// double equal check equality of value and not type
1==1;//true
"1"==1//true
"1"===1//false

// if statement
let age=18;
if(age==18){
    console.log("you are an adult")
}
// and
let haveLicense =true;
if(age==18 && haveLicense){
    console.log("you can drive")
}
//or
let sex="male";
if(age==18 && (sex=="male"||sex=="female")){
    console.log("you can register for driving license")
}
