const $arenas = document.querySelector('.arenas');
const $fromFight = document.querySelector('.control');
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Katana'],
    elHP,
    changeHP,
    renderHP,
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
    elHP,
    changeHP,
    renderHP,
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

function elHP () {
    return document.querySelector('.player'+this.player+'.life'); 
}

function changeHP (playerRandom) {
    this.hp -= playerRandom;
    if (this.hp <= 0) {
        this.hp -= 0;
    }
}

function renderHP () {
   this.elHP().style.width = this.hp + '%';
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

function createReloadButton () {
    const $reloadButtonDiv = createElement ('div','reloadWrap');
    const $reloadButton = createElement ('button','button');
    $reloadButton.innerText = 'Reload';

    $reloadButton.addEventListener('click',function(){
        window.location.reload();
    })

    $reloadButtonDiv.appendChild($reloadButton);
    $arenas.appendChild($reloadButtonDiv);
}

$arenas.appendChild(createPlayer(player1)); 
$arenas.appendChild(createPlayer(player2)); 

function enemyAttack() {
    const hit = ATTACK[getRandom(3)-1];
    const defence = ATTACK[getRandom(3)-1];
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}

function playerAttack (){
    const attack = {};
    for (let item of $fromFight){
        if (item.checked && item.name === 'hit'){
            attack.value = getRandom (HIT[item.value]);
            attack.hit = item.value;            
        }
        if (item.checked && item.name === 'defence'){
            attack.defence = item.value;            
        }
        item.checked = false;
    }
    return attack;
}

$fromFight.addEventListener('submit', function(e){
    e.preventDefault(); 
    const enemy = enemyAttack();
    const player = playerAttack();

    if(player.defence !== enemy.hit){
        player1.changeHP(enemy.value);
        player1.renderHP();
    }

    if(player.defence !== player.hit){
        player2.changeHP(player.value);
        player2.renderHP();
    }
    if (player1.hp === 0 || player2.hp === 0) {
                $randomButton.disabled = true;
                createReloadButton();
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
