class View {
  constructor(game, el) {
    this.el = el
    this.game = game
    
    this.setupBoard()
  }
  
  setupBoard() {
    const ul = document.createElement("ul") 
    
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
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }

}



export default View;