/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  combo1 = [sq0,sq1,sq2],
  combo2 = [sq0,sq3,sq6],
  combo3 = [sq0,sq4,sq8],
  combo4 = [sq1,sq4,sq7],
  combo5 = [sq2,sq5,sq8],
  combo6 = [sq3,sq4,sq5],
  combo7 = [sq6,sq7,sq8],
  combo8 = [sq6,sq4,sq2],
]

/*---------------------------- Variables (state) ----------------------------*/
let boardArray
let turn
let winner

/*------------------------ Cached Element References ------------------------*/
const boardArrayEle = document.querySelector('section')

const messageEle = document.querySelector('#message')

const resultEle= document.querySelector('#game-result-message')

const squareEle = document.querySelectorAll('.square')
/*----------------------------- Event Listeners -----------------------------*/
for(let i=0; i< squareEle.length; i++){
  squareEle[i].addEventListener('click', handleClick){
  }
    
    //temp if condidtion just want to make sure if works
    //maybe we can set 'value' of text content to 1 or -1 than in the render loop through the array and render X or O depending on value?
    //5
    
  
}

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
boardArray = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = null
render()

}
function render(){
  boardArray.forEach(function(square, index){
    //squareEle[index] = boardArray[index]
    //console.log(boardArray[index])
    if(boardArray[index] === 1){
      squareEle[index].textContent = 'X'
    }
    if(boardArray[index] === -1){
      squareEle[index].textContent = 'O'
    }
    if(boardArray[index] === null){
      squareEle[index].textContent = ""
    }
  })
  render.renderMessage
}

function renderMessage(){
  messageEle.textContent= `${turn} turn`
  if(winner === null){
    messageEle.textContent = `${turn} turn`
  }else if(winner === 'T'){
  messageEle.textContent = `Game ended in a tie`
  }else{
  messageEle.textContent = `${turn} is the winner`
  }
  }

function handleClick(){
  
}