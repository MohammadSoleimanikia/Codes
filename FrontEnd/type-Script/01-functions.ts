// annotation a function parameter 
const sayHi=(person:string)=>{
    return `Hi ${person}`
}

// default value 
const sayHiStranger=(person:string='Stranger')=>{
    return `Hi ${person}`
}

// return type 
const square=(num:number):number=>{
    return num*num
}

// multiple return type ( | )
const randNumber=():number|string=>{
const number= Math.random();
if(number<0.5){
    return `${number}`
}
else{
    return number
}
}

