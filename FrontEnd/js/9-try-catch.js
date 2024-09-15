try{
    // cause error because hello is not defined 
    hello.toUpperCase();
}
catch{
    // execute after code cause error in try block
    console.log("Error");
}

//if we pass the number cause error
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}
yell(11);
yell('hello');