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

const winCombos = [
  [sq0,sq1,sq2], [sq0,sq3,sq6], [sq0,sq4,sq8], [sq1,sq4,sq7],
  [sq2,sq5,sq8], [sq3,sq4,sq5], [sq6,sq7,sq8], [sq6,sq4,sq2]
]
const areYouWinCombos = [
  [0,1,2], [0,3,6], [0,4,8], [1,4,7],
  [2,5,8], [3,4,5], [6,7,8], [6,4,2]
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

const replayBtn = document.getElementById("replay-button")
/*----------------------------- Event Listeners -----------------------------*/
//board clicker
for(let i=0; i< squareEle.length; i++){
  //console.log(squareEle[i].id)
squareEle[i].addEventListener('click', handleClick)
}  
//replay button
replayBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
//maybe the default message could go in here actually...
messageEle.textContent = `Default Message`
boardArray = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = null
render() //not sure where to put render ⚠️

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
  
}

function renderMessage(){
  
  //messageEle.textContent= `${turn} turn`
  if(winner === null){
    messageEle.textContent = `${turn === 1 ? 'X' : 'O'}'s turn`
  }else if(winner === 'T'){
  messageEle.textContent = `Game ended in a tie`
  }else{
  messageEle.textContent = `${winner === 1 ? 'X' : 'O'} is the winner`
  }
  }

function handleClick(evt){
let index = evt.target.id //index is a string
let splitIndex = index.split("")
index = parseInt(splitIndex.splice(-1))//index is a number
if(evt.target.innerHTML !== "" || winner !== null){
  return
}else{
  boardArray[index]=turn
  turn = turn * -1
  render() //not sure if this is where i call render but had to update
  
  getWinner()
  renderMessage()
  console.log(boardArray)
  console.log(winner)
  }
}

function getWinner(){
  let total = 0
  let winVar //stores the winner variable to the board's value at the index specified by the first index of that winning combination's array...yea 

  areYouWinCombos.forEach(function(combo){
    combo.forEach(function(idx){
      total += boardArray[idx]
      
    })
    total = Math.abs(total)
    if(total === 3){
      winVar = boardArray[combo[0]]
      winner = boardArray[combo[0]] 
    }
     if(boardArray.some((element)=> element === null) === false){
       winner = 'T'
    //   //console.log(winner)
     }
    
    
    total = 0 //resets the total to 0 after each win combo 
    console.log("break")//sanity check for run through of tihs foreach at combo
  })
}