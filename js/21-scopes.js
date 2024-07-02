let globalVar="global var, can accessed from an where"

function localScope(){
// local scope
    let localVar="local variable, can't access from out side of its scope"
    console.log(localVar);
    console.log(globalVar);
}
// cant access local var: localVar is not defined
// console.log(localVar);

localScope();
//------------------------------------------------------------------------------------
if(true){
    var x=5;
    let y=6;
}
// out side of scopes("if","for",...) except functions, the variables that declared by var keyword is available
console.log(x);

// "y" is not available because it declared by let keyword
// console.log(y);

//----------------------------------------------------------------------------------------------
// Nested scope
const hummus = function(factor) {
   
    const ingredient = function(amount, unit, name) {
        // ingredient function(inner) can access outer function(hummus)
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };

    //hummus (outer function) can't access the inner function values
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
hummus(5);