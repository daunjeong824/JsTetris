import {makeBoard} from './board.js';

const playbtn = document.querySelector(".play-button");


/* Game start */
const startGame = () => {
    let myBoard = makeBoard(12,20);
    console.log(myBoard);
}

/* 점수 ( show, update ) */

playbtn.addEventListener("click", startGame);