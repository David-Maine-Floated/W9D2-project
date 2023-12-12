// Add your import statements for View and Game here
import Game from "../ttt_node/game.js"
import View from "./ttt-view.js" // work w/o slash?

document.addEventListener("DOMContentLoaded", () => {
  
  // let ttt = document.getElementByClassName("ttt") old
  let ttt = document.querySelector(".ttt")
  let game = new Game()
  let view = new View(game, ttt)
  
});