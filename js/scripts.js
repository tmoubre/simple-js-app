let pokemonRepository = (function () {

    let pokemons = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
    // let modalContainer = document.querySelector('#modal-container');


    function add(pokemon) {
        pokemons.push(pokemon)
    }

    function getAll() {
        return pokemons;
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            $('#pokemonName').text(pokemon.name);
            $('#pokemonHeight').text('Height: ' + pokemon.height);
            $('#pokemonImage').attr('src', pokemon.imageUrl);
            $('#pokemonModal').modal('show');
        });
    }

    function addListItem(pokemon) {
        let pokemonList = $('.pokemon-list');
        let listItem = $('<li></li>').addClass('pokemon-info');
        let button = $('<button></button>').text(pokemon.name).addClass('body');

        listItem.append(button);
        pokemonList.append(listItem);
        button.on('click', function () {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };


})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});





// function showModal(title, text, img) {
//     modalContainer.innerHTML = '';

//     let modal = document.createElement('div');
//     modal.classList.add('modal');

//     let closeButtonElement = document.createElement('button');
//     closeButtonElement.classList.add('modal-close');
//     closeButtonElement.innerText = "Close";
//     closeButtonElement.addEventListener('click', hideModal);

//     let pokemonName = document.createElement('h1');
//     pokemonName.innerText = title;

//     let pokemonHeight = document.createElement('p');
//     pokemonHeight.innerText = text;

//     let pokemonImage = document.createElement('img');
//     pokemonImage.setAttribute('src', img);
//     pokemonImage.setAttribute("width", "100");
//     pokemonImage.setAttribute("height", "100");

//     modal.appendChild(closeButtonElement);
//     modal.appendChild(pokemonName);
//     modal.appendChild(pokemonHeight);
//     modal.appendChild(pokemonImage);
//     modalContainer.appendChild(modal);

//     modalContainer.classList.add('is-visible');

//     modalContainer.addEventListener('click', (e) => {
//         let target = e.target;
//         if (target === modalContainer) {
//             hideModal();
//         }
//     });
// }

// function hideModal() {
//     modalContainer.classList.remove('is-visible');
// }

// window.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//         hideModal();
//     }
// });

