import React from 'react'
import GameBeta from '../components/game/GameBeta'

 class GameContainer extends React.Component {

   state = {
      level: 'start',
      score: null
    }

   gameOver = (score) => {
     debugger
    this.setState({
        level:'start',
        score:score})
  }

   render(){
     switch (this.state.level) {
       case 'start':
       console.log("start game")
         return (
           <div className="gameContainer">
             <GameBeta gameOver={this.gameOver}/>
           </div>
         )
         break
       case 'gameOver':
       console.log("game over")
         return (
           <div className="gameContainer">
             <h1>Score: {this.state.score}</h1>
           </div>
         )
         break
       default:
       return (
        <React.Fragment>
          gameContainer
          <GameBeta gameOver={this.gameOver} />
        </React.Fragment>
       )
         break
     }

   }
}
 export default GameContainer
