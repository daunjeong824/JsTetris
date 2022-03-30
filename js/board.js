import { BOARD_HEIGHT, BOARD_WIDTH, BLOCK_SIZE } from './setting.js'

const canvas = document.querySelector(".game-board");
const ctx = canvas.getContext('2d');

ctx.canvas.width = BOARD_HEIGHT * BLOCK_SIZE;
ctx.canvas.height = BOARD_WIDTH * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

/* Make Matrix */
const makeBoard = (width, height) => {
    let board = Array.from(Array(height), () => Array(width).fill(0));
    return board;
}

export {makeBoard};