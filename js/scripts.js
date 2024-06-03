let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
  return {
    //adds to the list
    add: function (pokemon) {
      pokemonList.push(pokemon);
    
    },
    getAll: function () {
    //Displays the list
      return pokemonList; 
      
    //add array to an list 
    },
    addListItem: function (pokemon) {
      let repository = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      repository.appendChild(listpokemon);

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
      return response.json();
    })
      .then(function(json)  {
      json.results.forEach(function(item){
        let pokemon=  {
          name: item.name,
          detailsUrl: item.url,
        };
        add (pokemon);
        console.log(pokemon);
      });
    })
    .catch(function (e) {
      console.error(e);
    })
  }
  return{
    loadList: loadList,
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  }; 
},  
pokemonRepository.loadList().then(function()  {
pokemonRepository.getAll().forEach(function (pokemon) {
pokemonRepository.addListItem(pokemon);
  });
}
)}
})();
// function logToConsole(item) {
//   //displays the array
//   console.log(item);
// }
// for (let i = 0; i < pokemonList.length; i++) {

//   if (pokemonList[i].height >= 6) {
//     //loop to determine the size and mae of the pokemon
//     document.write('<p>' + pokemonList[i].name + ' /'+' Height:' + pokemonList[i].height + ' - wow that is big! </p>')
//   } else {
//     document.write('<p>' + pokemonList[i].name + ' /' + ' Height:' + pokemonList[i].height + ' </p>')
//   }
// return {
//   //adds to the list
//   add: function (pokemon) {
//     pokemonList.push(pokemon);
//   },
//   getAll: function () {
//     //Displays the list
//     return pokemonList;
//   }

    //Gets the pokemon names displayed on the buttons 
      // let button_clicked = document.getElementsByClassName('button-class');
      // for (let i = 0; i < button_clicked.length; i++)
      //   button_clicked[i].addEventListener('click', function () {
      //     console.log(button_clicked[i].innerHTML)
      //   })

      //adds a new pokemon and gets the pokemon from the array and logs to console
// pokemonrepository.add({ name: 'Pikachu', type: 'Mouse', height: '1.4' });
// console.log(pokemonrepository.getAll());