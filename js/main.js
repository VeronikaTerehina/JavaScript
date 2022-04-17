import Game from "./classGame.js";

const $arenas = document.querySelector('.arenas');
const $chat = document.querySelector('.chat');

const game = new Game({
    root: $arenas,
    chat: $chat,
});

game.start(); 