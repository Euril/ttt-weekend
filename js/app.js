/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares
//1.1
let turn
//1.2
let winner
//1.3


/*------------------------ Cached Element References ------------------------*/
const board = document.querySelector('section')
console.log(board)
const messageEle = document.querySelector('#message')

const resultEle= document.querySelector('#game-result-message')

const square = document.querySelectorAll('.square')
console.log(square)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
for(const element of square){
  element.textContent = null
}
turn = 1
winner = null
}

function render(){
  
}