import { BOARD_HEIGHT, BOARD_WIDTH, COLOR } from './setting.js'

class Board {
    grid;
    constructor(ctx) {
      this.ctx = ctx;
      this.blockColor = [];
    }
    /*init() {
      this.ctx.canvas.width = COLS * BLOCK_SIZE;
      this.ctx.canvas.height = ROWS * BLOCK_SIZE;
      this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    }*/

    reset() {
      this.grid = this.getEmptyBoard();
    }
    
    getEmptyBoard() {
      return Array.from(
        {length: BOARD_HEIGHT}, () => Array(BOARD_WIDTH).fill(0)
      );
    }

    /* Rotate */
    rotate(p) {
      // 1. p의 shape을 가져와서 (2차원 배열을 다 복사하려면 해당 방법을 사용!)
      let rotatedP = JSON.parse(JSON.stringify(p));
      // 2. 위치행렬 변환
      for(let y=0; y < rotatedP.shape.length; ++y) {
        for(let x=0; x < y; ++x) {
          [rotatedP.shape[x][y], rotatedP.shape[y][x]] =
            [rotatedP.shape[y][x], rotatedP.shape[x][y]]; 
        }
      }
      rotatedP.shape.forEach(row => row.reverse());
      // 2. 변환된 블럭 반환
      return rotatedP;
    }
    /* Merge */
    merge() {
      this.block.shape.forEach((row, dy) => {
        row.forEach((val, dx) => {
          if(val !== 0) {
            this.grid[this.block.y + dy][this.block.x + dx] = val;
          }
        })
      })
    }

    /* Draw */
    drawAll() {
      this.block.drawBlock();
      this.drawBoard();
    }
    /* 블럭이 쌓이는 걸 보여주기 위한 feature, 보드를 다 그리기 */
    drawBoard() {
      this.grid.forEach((row,y) => {
        row.forEach((val, x) => {
          if(val > 0) {
            this.ctx.fillStyle = COLOR[val-1];   
            this.ctx.fillRect(x, y, 1, 1);
          }
        })
      })
    }
    /* */

    /* DeleteLine */
    deleteLine() {
      this.grid.forEach((row, y) => {
        // 모든 값이 0보다 큰지 비교한다.
        if (row.every(value => value > 0)) {
          // 행을 삭제한다.
          this.grid.splice(y, 1);
          // 맨 위에 0으로 채워진 행을 추가한다.
          this.grid.unshift(Array(BOARD_WIDTH).fill(0));
        } 
      });
    }

    /* Check block move */
    isMove(p) {
      /* every() -> array Method, array 모든 원소에 대해 특정 기능 수행, 해당 결과값을 return하는 함수! */
      return p.shape.every((row,dy) => {
        return row.every((val, dx) => {
          /* 이동된 block 시작 포지션 값(변화량) + 블럭의 각 좌표들  */
          let nextY = p.y + dy;
          let nextX = p.x + dx;
          /* 이동된 좌표들 유효성 검사 */
          return (this.isEmpty(val) ||
            this.insideBoard(nextX, nextY) && this.checkFloor(nextX, nextY) );
        }) 
      })
    }
    isEmpty(val) {
      return val === 0;
    }
    /* block이 board 안에 있는지.. */
    insideBoard(x, y) {
      return x >= 0 && x < BOARD_WIDTH && y <= BOARD_HEIGHT;
    }
    /* 바닥이 0인 경우에만 움직이도록.. */
    checkFloor(x, y) {
      return (this.grid[y] && this.grid[y][x] === 0);
    }
  }


export {Board};