/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
const init = (event) => {
    console.log('game initialized')
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false
    render()
}
const render = () => {
    updateBoard()
    updateMessage()
}
const updateBoard = () => {
    board.forEach(square => {
        [square] = squareEls
        [square] = 'X'
    });
}

const updateMessage = () => {
    if (!winner && !tie) {
        messageEl.textContent = `It is ${turn}'s turn`
    }
    else if (!winner && tie) {
        messageEl.textContent = "tie"
    }
    else {
        messageEl.textContent = "Player has won!"
    }
}
const handleClick = (event) => {
    const squareIndex = event.target.id
    if (board[squareIndex]) {
        return
    }
    if (winner) {
        return
    }
    placePiece(squareIndex)
}

const placePiece = (index) => {
    board[index] = turn
}

// const checkForWinner()

/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)
squareEls.forEach(function (square) {
    square.addEventListener('click', handleClick)
})

