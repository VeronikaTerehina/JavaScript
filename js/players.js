export const player1 = {
    player: 1,
    name: 'scorpionchik',
    hp: 100,
    elHP,
    renderHP,
    changeHP,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Sword', 'Katana']
}

export const player2 = {
    player: 2,
    name: 'subzerochik',
    hp: 100,
    elHP,
    renderHP,
    changeHP,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Sword', 'Katana']
}

function changeHP(damage) {
    this.hp -= damage;

    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
} 