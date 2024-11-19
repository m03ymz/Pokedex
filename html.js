function generateLoadPokemon(i){
    return /*html*/`
    <div onclick="openPokemonInfo(${i})" class="pokemon-box ${currentType}" id="pokemon-box${i}">
        <div class="text-box">
            <h2>${currentName}</h2>
            <button class="pokemon-type ${currentType}" id="pokemon-type${i}">${currentType}</button>
            <button class="pokemon-type ${currentType2}" id="pokemon-type2${i}">${currentType2}</button>
        </div>
        <div class="text-box2">
            <span class="pokemon-number">#${i}</span>
            <img class="pokemon-img" id="pokemon-img${i}">
        </div>
    </div>
    `;
}

function generateLoadMorePokemon(i){
    return /*html*/`
    <div onclick="openPokemonInfo(${i})" class="pokemon-box ${currentType}" id="pokemon-box${i}">
        <div class="text-box">
            <h2>${currentName}</h2>
            <button class="pokemon-type ${currentType}" id="pokemon-type${i}">${currentType}</button>
            <button class="pokemon-type ${currentType2}" id="pokemon-type2${i}">${currentType2}</button>
        </div>
        <div class="text-box2">
            <span>#${i}</span>
            <img class="pokemon-img" id="pokemon-img${i}">
        </div>
    </div>
    `;
}

function generateOpenPokemonInfo(i){
    return /*html*/`
    <div>
    <div class="pokemoninfo-box ${currentType} d-none" id="pokemoninfo-box${i}">
        <div class="pokemoninfo-text">
            <div class="button-box">
                <h2>${currentName}</h2>
                <div class="button-box2">
                    <button class="pokemon-type2 ${currentType}" id="pokemon-type${i}">${currentType}</button>
                    <button class="pokemon-type2 ${currentType2}" id="pokemon-type-2${i}">${currentType2}</button>
                </div>
            </div>
            <img onclick="closePokemonInfo(${i})" class="x-button" src="./img/x-button2.png" alt="">
            <div class="pokemoninfo-counter">
                <img class="pokeball-img" src="./img/pokeball.png" alt="">
                <span>#${i}</span>
            </div>
        </div>
        <div class="pokemoninfo-img">
            <img class="pokemoninfo-img" id="pokemoninfo-img${i}">
        </div>
        <div class="info-container" id="info-container${i}">
        <div class="info-menu">
            <div onclick="showAbout(${i})" class="info1 ${currentType}" id="info1${i}"><b>About</b></div>
            <div onclick="showBaseStats(${i})" class="info2 ${currentType}" id="info2${i}"><b>Base Stats</b></div>
            <div onclick="showAnimations(${i})" class="info3 ${currentType}" id="info3${i}"><b>Animation</b></div>
            <div onclick="showShinyAnimatios(${i})" class="info4 ${currentType}" id="info4${i}"><b>Shiny</b></div>
        </div>
        <div class="info-box">
            <div class="information1 d-none" id="information1${i}">
                <table>
                    <tr>
                        <td>Species</td>
                        <td><b>${currentName}</b></td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td><b>${currentWeight} kg</b></td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td><b>${currentHeight} m</b></td>
                    </tr>
                    <tr>
                        <td>Ability</td>
                        <td><b>${currentAbility}</b></td>
                    </tr>
                </table>
            </div>
            <div class="information2 d-flex" id="information2${i}">
                <canvas id="baseStatsChart"></canvas>
            </div>
            <div class="information3 d-none" id="information3${i}">
                <img class="gif-img" src="${currentGif1}" alt="">
                <img class="gif-img" src="${currentGif2}" alt="">
            </div>
            <div class="information4 d-none" id="information4${i}">
                <img class="gif-img" src="${currentShinyGif1}" alt="">
                <img class="gif-img" src="${currentShinyGif2}" alt="">
            </div>
            <div class="arrows">
                <img onclick="goToLeftPokemon(${i})" src="./img/pfeil-links.png" alt="">
                <img onclick="goToRightPokemon(${i})" src="./img/pfeil-rechts.png" alt="">
            </div>
        </div>
    </div>
    </div>
    `;
}