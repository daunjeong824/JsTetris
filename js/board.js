import { BOARD_HEIGHT, BOARD_WIDTH } from './setting.js'

class Board {
    grid;

    reset() {
      this.grid = this.getEmptyBoard();
    }
    
    getEmptyBoard() {
      return Array.from(
        {length: BOARD_HEIGHT}, () => Array(BOARD_WIDTH).fill(0)
      );
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