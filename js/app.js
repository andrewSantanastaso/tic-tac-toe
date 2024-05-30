/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/

const squareEls = [
    document.getElementById('0'),
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),

]

const messageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('button')

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
    board.forEach((value, index) => {
        // let square = squareEls[index]
        // square.textContent = `${board[index]}`
        squareEls[index].textContent = value;
    });
}

const updateMessage = () => {
    if (winner) {
        messageEl.textContent = `${turn} has won!`
    }
    else if (tie) {
        messageEl.textContent = "It's a tie!"
    }
    else {
        messageEl.textContent = `It is ${turn}'s turn`
    }
}
const handleClick = (event) => {
    const squareIndex = event.target.id
    if (board[squareIndex] || winner) {
        return
    }

    placePiece(board, squareIndex)
    checkForWinner(board, winningCombos)
    checkForTie(board, winner)
    switchPlayerTurn()
    render()
}

const placePiece = (board, squareIndex) => {
    board[squareIndex] = turn
    // console.log(board)
}

const checkForWinner = (board, winningCombos) => {
    for (let combo of winningCombos) {
        let A = combo[0]
        let B = combo[1]
        let C = combo[2]
        if (board[A] && board[A] === board[B] && board[A] === board[C]) {
            winner = true
        }
        // console.log(winner)
    }
}

const checkForTie = () => {
    if (winner) {
        return
    }

    if (board.includes('')) {
        tie = false
    }
    else {
        tie = true
    }

}
// console.log(`Tie is ${tie}`)


const switchPlayerTurn = () => {
    if (winner) {
        return
    }

    if (turn === 'X') {
        turn = '0'

        return
    }
    if (turn === '0') {
        turn = 'X'

        return
    }
}



/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)
squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)
