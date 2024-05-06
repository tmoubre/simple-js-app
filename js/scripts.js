let pokemonrepository = (function(){
let pokemonList = [
  //pokemon attributes
  { name: 'Charmander', type: 'grass', height: 6 },
  { name: 'Veusar',     type: ['grass', 'poison'], height: 2 },
  { name: 'Ivysaur',    type: ['grass', 'poison'], height: 1 }
];
return{
  //adds to the list
  add: function(pokemon){
 pokemonList.push(pokemon);
  },
  getAll: function(){
    //Displays the list
    return pokemonList;
  }
}
})();



// for (let i = 0; i < pokemonList.length; i++) {

//   if (pokemonList[i].height >= 6) {
//     //loop to determine the size and mae of the pokemon
//     document.write('<p>' + pokemonList[i].name + ' /'+' Height:' + pokemonList[i].height + ' - wow that is big! </p>')
//   } else {
//     document.write('<p>' + pokemonList[i].name + ' /' + ' Height:' + pokemonList[i].height + ' </p>')
//   }

console.log(pokemonrepository.getAll());
pokemonrepository.add({name: 'Pikachu', type:'Mouse', height:'1.4'});
console.log(pokemonrepository.getAll());
pokemonrepository.getAll().forEach(logToConsole);
function logToConsole(item) {
  //displays the array
  console.log(item);
}

  
};

// function subtract (number1, number2){
// if (divisor ===0){
//   return "You are trying to divide by zero."
// }else{
//     let result=dividend/divisor;
//     return result;
//   }

// return number1 - number2;
// }
// let result = subtract(4,2)
// console.log(result);
// // console.log(divide(7,0));
// // console.log(divide(1,4));
// // console.log(divide(12,-3));

// let add=function(person1,person2){
//   return  person1+person2

// };
// add(23,23);


// let addtwo = [p1,p2];
// function addtwo (p1,p2){
//   return 10 + 10;

// }
// console.log (addtwo(10,10))

// function add(num1,num2){
//   return num1+num2
// }
// add(1,2)

