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


/*----------------------------- Event Listeners -----------------------------*/
window.addEventListener('load', init)


