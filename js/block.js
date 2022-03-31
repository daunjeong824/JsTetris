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
    /* 블럭 움직임 */
    moveBlock(p) {
        this.x = p.x;
        this.y = p.y;
    }
    /*moveBlock() {
        window.addEventListener("keydown", e => {
            e.preventDefault();
            const toMove = e.keyCode;
            if(this.canMove()){
            if(toMove === 37) {
                this.x -= 1;
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 
                this.drawBlock();
            }
            else if (toMove === 39) {
                this.x += 1;
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 
                this.drawBlock();
            }
            else if (toMove === 40) {
                this.y += 1;
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 
                this.drawBlock();
            }
        }
        })
    }*/

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