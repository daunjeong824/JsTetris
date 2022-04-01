const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 20;
const KEY = {
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  UP: 38
};
/* const a = {}; => 객체가 const라 해도 속성 넣고 빼는게 가능!
   아예 객체도 불변함으로 동결시키기 위해 const & Object.freeze() 사용..   
*/
Object.freeze(KEY); 

const COLOR = ['purple', 'yellow', 'blue', 'red', 'green', 'orange', 'skyblue'];
const SHAPES = [
   [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0]
   ],
   [ 
     [2,0,0],
     [2,2,2],
     [0,0,0],
   ],
   [
       [3,3],
       [3,3]
   ],
   [    
     [4,4,0],
     [0,4,4],
     [0,0,0]
   ],
   [
       [0,5,5],
       [5,5,0],
       [0,0,0]
   ],
   [
    [0,6,0],
    [6,6,6],
    [0,0,0] 
   ],
    
   [
        [0,0,7],
        [7,7,7],
        [0,0,0]
   ]
];


export { BOARD_HEIGHT, BOARD_WIDTH, BLOCK_SIZE, KEY, COLOR, SHAPES };