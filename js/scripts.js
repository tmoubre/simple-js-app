let pokemonList = [
  //pokemon attributes
  { name: 'Charmander', type: 'grass', height: 6 },
  { name: 'Veusar',     type: ['grass', 'poison'], height: 2 },
  { name: 'Ivysaur',    type: ['grass', 'poison'], height: 1 }
];

for (let i = 0; i < pokemonList.length; i++) {

  if (pokemonList[i].height == 6) {
    //loop to determine the size and mae of the pokemon
    document.write('<p>' + pokemonList[i].name + ' /'+' Height:' + pokemonList[i].height + ' - wow that is big! </p>')
  } else {
    document.write('<p>' + pokemonList[i].name + ' /' + ' Height:' + pokemonList[i].height + ' </p>')
  }
}