// set a prototype for rabbit object
let animal = {
    eats: true,
    walk(){
        console.log('animal walk')
    },
  };
  let rabbit = {
    jumps: true
  };
//   rabbi inherited the method and properties of animal
  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

// we can find both properties in rabbit now:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true

// we can chain object together 
let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  // walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)

