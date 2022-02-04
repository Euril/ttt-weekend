/*-------------------------------- Constants --------------------------------*/
const winCond = [
  [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8],
  [3,4,5], [6,7,8], [6,4,2]
]


/*---------------------------- Variables (state) ----------------------------*/
let square
//1.1
let turn
//1.2
let winner
//1.3
let board


/*------------------------ Cached Element References ------------------------*/
const boardEle = document.querySelector('section')
console.log(boardEle)
const messageEle = document.querySelector('#message')

const resultEle= document.querySelector('#game-result-message')

const squareEle = document.querySelectorAll('.square')
console.log(squareEle)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()
console.log(squareEle.length)
console.log(squareEle[square])

function init(){
board = [null,null,null,null,null,null,null,null,null]
//squareEle = [null,null,null,null,null,null,null,null,null]
turn = 1
winner = null
console.log(board)
render()
}

function render(){
for(i = 0; i< board.length ; i++){
  //squareEle[square]=board[i]
  for(square of squareEle){
    if(turn > 0){
      squareEle.textContent='X'
      squareEle.className="xSq"
    }
    if(turn < 0){
      squareEle.textContent='O'
      squareEle.className="oSq"
    }
    if(turn === null){
      squareEle.textContent=""
    }
  }
  //renderMessage()
  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
  
  
  console.log(board[i])
  console.log(squareEle[square])
}
function renderMessage(){
  if(winner === null){
    messageEle.textContent = `${turn} turn`
}else if(winner === 'T'){
  messageEle.textContent = `Game ended in a tie`
}else{
  messageEle.textContent = `${turn} is the winner`
}

}