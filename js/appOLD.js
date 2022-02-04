/*-------------------------------- Constants --------------------------------*/
const winCond = [
  [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8],
  [3,4,5], [6,7,8], [6,4,2]
]
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
console.log(winningCombos[0])
const players = {
  '1': {
    name: ``,
    score:0
  },
  '-1': {
    name: '',
    score:0
  }
}


/*---------------------------- Variables (state) ----------------------------*/
let square
//1.1
let turn
//1.2
let winner //would be equal to: 1 if X won / -1 if O won / T if a tie occured / null if game is still in progress
//1.3
let board


/*------------------------ Cached Element References ------------------------*/
const boardEle = document.querySelector('section')
console.log(boardEle)
const messageEle = document.querySelector('#message')

const resultEle= document.querySelector('#game-result-message')

const squareEle = document.querySelectorAll('.square')


/*----------------------------- Event Listeners -----------------------------*/
// squareEle.addEventListener('click', function(event){
//   console.log(event.id)
// })
  for(let i=0; i< squareEle.length; i++){
    squareEle[i].addEventListener('click', function(event){
      console.log(squareEle[i].id)
      console.log(squareEle[i].innerHTML)
      //console.log(squareEle)
      //temp if condidtion just want to make sure if works
      //maybe we can set 'value' of text content to 1 or -1 than in the render loop through the array and render X or O depending on value?
      //5
      if(squareEle[i].textContent === ""){
        squareEle[i].innerHTML = turn
      }else{
        return
      }
      if(winner === -1){
        renderMessage()
      }else if (winner === 1){
        renderMessage()
      }else if (winner === 'T'){
        renderMessage()
      }else{
        render
      }
      turn = turn * -1
      //render message changes the text message when a click happens
      renderMessage()
      console.log(squareEle)
    })
  }

/*-------------------------------- Functions --------------------------------*/
init()

//console.log(squareEle.length)
//console.log(squareEle[square])

function init(){
//board = [sq0 = null, sq1= null,sq2=null,sq3=null,sq4=null,sq5=null,sq6=null,sq7=null,sq8=null]
board = [null, null, null, null, null, null, null, null]
console.log(board)
//squareEle = [null,null,null,null,null,null,null,null,null]
turn = 1
winner = null
//console.log(board)
render()
}
//3
function render(){
  squareEle[2].textContent=`X`
    squareEle[6].textContent=`O`
    //squareEle[4].textContent=`X`
    //boardArray[4].innerHTML='X'

    //board.forEach(square => )
for(i = 0; i< board.length ; i++){
  for(let i=0; i< squareEle.length; i++){
    if(squareEle.innerHTML === 1){
      squareEle.textContent === "X"
    }else if(squareEle.innerHTML === -1){
      squareEle.textContent === "O"
    }
  }
  console.log(board)
  console.log(squareEle)
  //squareEle[square]=board[i]

  // for(square of squareEle){
  //   if(turn > 0){
  //     squareEle.textContent='X'
  //     squareEle.className="xSq"
  //   }
  //   if(turn < 0){
  //     squareEle.textContent='O'
  //     squareEle.className="oSq"
  //   }
  //   if(turn === null){
  //     squareEle.textContent=""
  //   }
  // }
  //renderMessage()
  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
  
  
  //console.log(board[i])
  //console.log(squareEle[square])
}

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

  const reducer = (previousValue, currentValue) => previousValue + currentValue

function getWinner(array){
for(let i = 0; i< array.length; i++){
  console.log(array[i].reduce(reducer))
}
}
console.log(winCond)
getWinner(winCond)
