import {Board} from './board.js';
import { BOARD_HEIGHT, BOARD_WIDTH, BLOCK_SIZE, KEY } from './setting.js'
import {Block} from './block.js'

const canvas = document.querySelector(".game-board");
const ctx = canvas.getContext('2d');

ctx.canvas.width = BOARD_WIDTH * BLOCK_SIZE;
ctx.canvas.height = BOARD_HEIGHT * BLOCK_SIZE;
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

const playbtn = document.querySelector(".play-button");

let board = new Board();
/* 
    현재 생성된 블럭를 제거하고 좌표 변경과 함께 복사된 블럭을 반환
    => 이를 위해서 펼침 연산자(spread operator)를 사용해 얕은 복사를 하고 요구되는 위치로 좌표들 변경 (실제 이동!)
 */
const moves = {
    [KEY.LEFT] : (p) => ({...p, x : p.x - 1 }),
    [KEY.RIGHT] : (p) => ({...p, x : p.x + 1 }),
    [KEY.DOWN] : (p) => ({...p, y : p.y + 1 }),
    [KEY.SPACE] : (p) => ({...p, y : p.y + 1}),
    [KEY.UP] : (p) => ({...p, })
}
let timer = null;

/* Game start */
const startGame = () => {
    board.reset();
    let block = new Block(ctx);
    block.drawBlock();

    /* Class 속성로 block 추가. */
    board.block = block;
}

/* Timer */

/* 이벤트 리스너는 해당 main.js에서만 처리하도록 기능 분리..!! */
playbtn.addEventListener("click", startGame);
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    let p = moves[e.keyCode](board.block); // 블럭을 일단 움직임

    /* Hard Drop */
    if(e.keyCode === KEY.SPACE) {
        while(board.isMove(p)) {
            board.block.moveBlock(p);
            p = moves[KEY.SPACE](board.block);
            
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height); // 이전 블럭 좌표를 지워, 블럭 그림도 없앤다.
            board.block.drawBlock(); // 이동된 블럭 그리기
        }
    }

    /* Rotate */

    if(board.isMove(p)) { // 이동 가능 여부 체크
        board.block.moveBlock(p); // 되면 진짜 움직이고,
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height); // 이전 블럭 좌표를 지워, 블럭 그림도 없앤다.
        board.block.drawBlock(); // 이동된 블럭 그리기
    }
})
