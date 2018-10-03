import React from 'react'
import GameBeta from '../components/game/GameBeta'

 class GameContainer extends React.Component {

   state = {
      level: 'start',
      score: null
    }

   gameOver = (score) => {
    this.setState({
        level:'gameOver',
        score:score})
  }

   render(){
     switch (this.state.level) {
       case 'start':
         return (
           <div className="gameContainer">
             <GameBeta gameOver={this.gameOver}/>
           </div>
         )
         break
       case 'gameOver':
         return (
           <div className="gameContainer">
             <h1>Score: {this.state.score}</h1>
           </div>
         )
         break
       default:
         break
     }
       return (
        <React.Fragment>
          gameContainer
          <GameBeta gameOver={this.gameOver} />
        </React.Fragment>
       )
   }
}
 export default GameContainer
