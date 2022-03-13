const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Katana'],
    attack: function (name) {
    console.log(name +'' + 'Fight...');
},
}
const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Sword', 'Katana'],
    attack: function (name) {
    console.log(name +'' + 'Fight...');
},
}
function createElement (tag, className){
    const $tag = document.createElement(tag);
    if (className) {
      $tag.classList.add(className);  
    }
    return $tag;
}
function createPlayer(playerObj) {
    const $player = createElement('div','player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $character = createElement('div', 'character');
    const $img = createElement('img');
    
    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    return $player;
}

function changeHP (player) {
    const $playerLife = document.querySelector('.player' + player.player +'.life');
    player.hp -= getRandom(20);
    if (player.hp < 0) {
        player.hp = 0;
    }
    $playerLife.style.width = player.hp + '%';
}

function playerWins (name){ 
    const $loseTitle = createElement ('div','loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' wins';
    }
    else {
        $loseTitle.innerText = ' draw';
    }
    return $loseTitle;
}

function getRandom (n) {
    return Math.ceil(Math.random()*n);
}

$randomButton.addEventListener('click',function(){
    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
    }
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } 
    else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    }
    else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
})

$arenas.appendChild(createPlayer(player1)); 
$arenas.appendChild(createPlayer(player2)); 