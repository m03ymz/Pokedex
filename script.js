let currentPokemon;
let pokemonName;
let pokemonNumber = 1;
let pokemonAmount = 18;

function init(){
    loadPokemon();
}

async function loadPokemon(){
    for (let i = pokemonNumber; i <= pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        showName();
        currentImg = currentPokemon.sprites.other.dream_world.front_default;
        showType();
        document.getElementById('pokedex').innerHTML += generateLoadPokemon(i);
        document.getElementById(`pokemon-img${i}`).src += `${currentImg}`;
        deleteType(i);
    }
}

async function loadMorePokemon(){
    pokemonAmount = pokemonAmount + 18;
    pokemonNumber = pokemonNumber + 18;
    for (let i = pokemonNumber; i <= pokemonAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        showName();
        currentImg = currentPokemon.sprites.other.dream_world.front_default;
        showType();
        document.getElementById('pokedex').innerHTML += generateLoadMorePokemon(i);
        document.getElementById(`pokemon-img${i}`).src += `${currentImg}`;
        deleteType(i);
        disableButton();
        if (i === 905) {
            document.getElementById('load-button').classList.add('d-none');
            break;
        }
    }
}

async function openPokemonInfo(i){
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        showName();
        currentImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
        showType();
        currentWeight = currentPokemon.weight;
        currentHeight = currentPokemon.height;
        currentAbility = currentPokemon.abilities[0].ability.name;
        showGifs();
        document.getElementById('pokemon-info').innerHTML = generateOpenPokemonInfo(i);
        document.getElementById(`pokemoninfo-img${i}`).src = `${currentImg}`;
        addPokemoninfoFlicker(i);
        addAboutTextColor(i);
        showPokemonInfo(i);
        deleteType2(i);
        renderChart();
}

function showName(){
    pokemonName = currentPokemon.name;
    currentName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
}

function showGifs(){
    currentGif1 = currentPokemon.sprites.other.showdown.front_default;
    currentGif2 = currentPokemon.sprites.other.showdown.back_default;
    currentShinyGif1 = currentPokemon.sprites.other.showdown.front_shiny;
    currentShinyGif2 = currentPokemon.sprites.other.showdown.back_shiny;
}

function addPokemoninfoFlicker(i,) {
    let elements = [`pokemoninfo-box${i}`, `info-container${i}`, `info2${i}`];
    for (let i = 0; i < elements.length; i++) {
        document.getElementById(elements[i]).classList.add(`flicker-${currentType}`);
    }
}

function addAboutTextColor(i){
    document.getElementById(`information1${i}`).classList.add(`color-${currentType}`);
}

function showPokemonInfo(i){
    document.getElementById(`pokemoninfo-box${i}`).classList.remove('d-none');
    document.getElementById(`pokedex`).classList.add('bg-darker');
    document.getElementById(`pokedex`).classList.add('pointer-events-none');
    document.getElementById(`body`).classList.add('bg-dark');
    document.getElementById(`body`).classList.add('overflow-hidden');
    document.getElementById(`headline`).classList.add('d-none');
    document.getElementById(`search-box`).classList.add('d-none');
    document.getElementById(`load-button`).classList.add('d-none');
    document.getElementById(`searchInput`).classList.add('d-none');
    document.getElementById(`searchButton`).classList.add('d-none');
    document.getElementById(`pokemon-logo`).classList.add('d-none');
}

function closePokemonInfo(i){
    document.getElementById(`pokemoninfo-box${i}`).classList.add('d-none');
    document.getElementById(`pokedex`).classList.remove('bg-darker');
    document.getElementById(`pokedex`).classList.remove('pointer-events-none');
    document.getElementById(`body`).classList.remove('bg-dark');
    document.getElementById(`body`).classList.remove('overflow-hidden');
    document.getElementById(`headline`).classList.remove('d-none');
    document.getElementById(`search-box`).classList.remove('d-none');
    document.getElementById(`load-button`).classList.remove('d-none');
    document.getElementById(`searchInput`).classList.remove('d-none');
    document.getElementById(`searchButton`).classList.remove('d-none');
    document.getElementById(`pokemon-logo`).classList.remove('d-none');
}

function removePokemonInfo(i){
    document.getElementById(`pokemoninfo-box${i}`).classList.add('d-none');
}

function goToLeftPokemon(i){
    removePokemonInfo(i);
    if(i == 1) {
        openPokemonInfo(i+904);
    } else {
    openPokemonInfo(i-1);
    }
}

function goToRightPokemon(i){
    removePokemonInfo(i);
    if(i == 905) {
        openPokemonInfo(i-904);
    } else {
    openPokemonInfo(i+1);
    }
}

function showAbout(i){
    document.getElementById(`information1${i}`).style.display = "flex";
    document.getElementById(`information2${i}`).style.display = "none";
    document.getElementById(`information3${i}`).style.display = "none";
    document.getElementById(`information4${i}`).style.display = "none";
    document.getElementById(`info2${i}`).style.animation = "none";
    document.getElementById(`info3${i}`).style.animation = "none";
    document.getElementById(`info4${i}`).style.animation = "none";
    changeColorFlickerInfo(1, i);
}

function showBaseStats(i){
    document.getElementById(`information1${i}`).style.display = "none";
    document.getElementById(`information2${i}`).style.display = "flex";
    document.getElementById(`information3${i}`).style.display = "none";
    document.getElementById(`information4${i}`).style.display = "none";
    document.getElementById(`info1${i}`).style.animation = "none";
    document.getElementById(`info3${i}`).style.animation = "none";
    document.getElementById(`info4${i}`).style.animation = "none";
    changeColorFlickerInfo(2, i);
}

function showAnimations(i){
    document.getElementById(`information1${i}`).style.display = "none";
    document.getElementById(`information2${i}`).style.display = "none";
    document.getElementById(`information3${i}`).style.display = "flex";
    document.getElementById(`information4${i}`).style.display = "none";  
    document.getElementById(`info1${i}`).style.animation = "none";
    document.getElementById(`info2${i}`).style.animation = "none";
    document.getElementById(`info4${i}`).style.animation = "none";
    changeColorFlickerInfo(3, i);
}

function showShinyAnimatios(i){
    document.getElementById(`information1${i}`).style.display = "none";
    document.getElementById(`information2${i}`).style.display = "none";
    document.getElementById(`information3${i}`).style.display = "none";
    document.getElementById(`information4${i}`).style.display = "flex";
    document.getElementById(`info1${i}`).style.animation = "none";
    document.getElementById(`info2${i}`).style.animation = "none";
    document.getElementById(`info3${i}`).style.animation = "none";
    changeColorFlickerInfo(4, i);
}

function changeColorFlickerInfo(infoNumber, i) {
    document.getElementById(`info${infoNumber}${i}`).style.animation = `flicker_${currentType} 2s infinite`;
}

// function changeColorFlickerInfo2(i) {
    // document.getElementById(`info2${i}`).style.animation = `flicker_${currentType} 2s infinite`;
// }
// 
// function changeColorFlickerInfo3(i) {
    // document.getElementById(`info3${i}`).style.animation = `flicker_${currentType} 2s infinite`;
// }
// 
// function changeColorFlickerInfo4(i) {
    // document.getElementById(`info4${i}`).style.animation = `flicker_${currentType} 2s infinite`;
// }

function showType(){
    if(currentPokemon.types.length === 2){
        currentType = currentPokemon.types[0].type.name;
        currentType2 = currentPokemon.types[1].type.name;
    }else {
        currentType = currentPokemon.types[0].type.name;
        currentType2 = '';
    }
}

function deleteType(i){
    if(currentPokemon.types.length === 1){
        document.getElementById(`pokemon-type2${i}`).classList.add('d-none');
    }
}

function deleteType2(i){
    if(currentPokemon.types.length === 1){
        document.getElementById(`pokemon-type-2${i}`).classList.add('d-none');
    }
}

function disableButton() {
    let button = document.getElementById("load-button");
    button.disabled = true;
    button.classList.add("disabled");
    setTimeout(function() {
        button.disabled = false;
        button.classList.remove("disabled");
    }, 3000);
}

async function searchPokemon(){
    let searchResult = document.getElementById('searchInput').value.toLowerCase();
    searchAlert(searchResult);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchResult}`);
    currentPokemon = await response.json();
    i = currentPokemon.id;
    showName();
    currentImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    showType();
    currentWeight = currentPokemon.weight;
    currentHeight = currentPokemon.height;
    currentAbility = currentPokemon.abilities[0].ability.name;
    showGifs();
    document.getElementById('pokemon-info').innerHTML = generateOpenPokemonInfo(i);
    document.getElementById(`pokemoninfo-img${i}`).src = `${currentImg}`;
    addPokemoninfoFlicker(i);
    addAboutTextColor(i);
    showPokemonInfo(i);
    deleteType2(i);
    renderChart();
    deleteInputValue();
}

function deleteInputValue() {
    document.getElementById("form").reset();
}

async function searchAlert(searchResult) {
    if (searchResult === "") {
        alert("Das Eingabefeld ist leer, bitte gib einen Pokemon Namen ein.");
        return;
    }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchResult}`);
        if (!response.ok) throw new Error("Fehler beim API-Aufruf");

        const data = await response.json();

        if (data.name) {
        } else {
            throw new Error("Wert nicht in der API gefunden");
        }
    } catch (error) {
        console.error("Fehler:", error);
        alert("Bitte einen Pokemon Namen in das Eingabefeld eingeben!!!");
    }
}



























