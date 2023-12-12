import Game from "../ttt_node/game"

class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    
    this.setupBoard()

    this.handleGameOver = this.handleGameOver.bind(this)
  }
  
  setupBoard() {
    const ul = document.createElement("ul") 
    
    ul.addEventListener("click", this.handleClick.bind(this)) // function style ==> bind needed to retain context

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const li = document.createElement('li')
        li.dataset.row = row
        li.dataset.column = col

        // li.classList.add('cell')

        ul.appendChild(li)
      }
    }
    this.el.appendChild(ul)
    

  }
  
  handleClick(e) { // event handler for clicks
    console.log("CLICKY")
    
    
    if (e.target.tagName.toLowerCase() === 'li' && e.target.innerHTML.trim() === "") {
      this.makeMove(e.target)
    } else {
      alert("space is already filled")
    }
    // if event target has mark, invalid move ==> show alert
    // find out if event target is an 
      // check li OR
      // check ul
    // if event target has passed check and is an 'li' ==> make move with that event target

  }

  makeMove(square) {
    // make move for game
    // make move for view
    const row = square.dataset.row
    const col = square.dataset.column
    
    this.game.playMove([row, col])
    square.classList.toggle('selected')
    square.innerHTML = this.game.currentPlayer // this line

    this.handleGameOver()
  }
  
  handleGameOver() {
    if (this.board.isOver) {
    alert("you win!")
    }
  }

}



export default View;