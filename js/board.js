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

    isMove(p) {
      return true;
    }
  }


export {Board};