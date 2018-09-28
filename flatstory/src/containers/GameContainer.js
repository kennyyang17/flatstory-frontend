import React from 'react'
import Game from '../components/game/Game'

 class GameContainer extends React.Component {

//    state = {
//       level: 'start',
//       score: null
//     }
   
//    gameOver = (score) => {
//     this.setState({
//         level:'gameOver', 
//         score:score})
//   }

   render(){
       return (
        <React.Fragment>GameContainer</React.Fragment>
       )
//     switch (this.state.level) {
//       case 'start':
//         return (
//           <div className="gameContainer">
//             <Game gameOver={this.gameOver}/>
//           </div>
//         )
//         break
//       case 'gameOver':
//         return (
//           <div className="gameContainer">
//             <h1>Score: {this.state.score}</h1>
//           </div>
//         )
//         break
//       default:
//         break
//     }
   }
}
 export default GameContainer