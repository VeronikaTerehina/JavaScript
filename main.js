const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Katana'],
    attack: function (name) {
    console.log(name +'' + 'Fight...');
},
}
const player2 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Sword', 'Katana'],
    attack: function (name) {
    console.log(name +'' + 'Fight...');
},
}
const arenas = document.querySelector('.arenas');
function createPlayer(Player, Obj) {
    const player = document.createElement('div');
    player.classList.add('Player');
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    const life = document.createElement('div');
    life.classList.add('life');
    const name = document.createElement('div');
    name.classList.add('name');
    const p = document.createElement('p');
    p.innerText = 'SCORPION'
    const character = document.createElement('div');
    character.classList.add('character');
    const img = document.createElement('img');
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    arenas.appendChild(player); 
    player.appendChild(progressbar);
    player.appendChild(character);
    progressbar.appendChild(life);
    progressbar.appendChild(name);
    name.appendChild(p);
    character.appendChild(img);

    life.style.width = Obj.hp + '%';
    name.innerText = Obj.name;
    img.src = Obj.img;
}

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));

createPlayer('player1', player1);
createPlayer('player2', player2);