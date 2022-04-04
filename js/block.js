import  {BOARD_HEIGHT, BOARD_WIDTH, COLOR, SHAPES} from './setting.js';

class Block { 

    constructor(ctx) {
        this.ctx = ctx;
        this.makeBlock();
    }

    /* 생성 */
    makeBlock() {
        this.color = COLOR[Math.floor(Math.random() * COLOR.length)] ;
        this.index = Math.floor(Math.random() * SHAPES.length);
        this.shape = SHAPES[this.index];
        this.index += 1;
        // Starting position.
        this.x = 3;
        this.y = 0;
    }
    /* 블럭 움직임 => 시작 좌표의 변화만 알면, 나머진 순회로 변경 가능.. & block 모양도 update! */
    moveBlock(p) {
        this.x = p.x;
        this.y = p.y;
        this.shape = p.shape;
    }

    /* 블럭 렌더링 */
    drawBlock() {
        this.ctx.fillStyle = this.color;
        // 블럭의 좌표에 대해
        this.shape.forEach((row, y) => {
            row.forEach((val, x) => {
                if(val !== 0) {
                    // 값이 0이 아니면 
                    this.ctx.fillRect(this.x+x, this.y+y, 1, 1);
                }
            })
        })
    }

}

export {Block}