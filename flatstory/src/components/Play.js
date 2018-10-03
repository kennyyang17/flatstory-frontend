import React from 'react';
import GameContainer from '../containers/GameContainer';
import Game from './game/Game';

const Play = () => {

  return (
    <div align="CENTER" >
      Play Page
      <table>
          <tbody>
            <tr>
              <td style={{border: "1px solid purple"}}><GameContainer /></td>
              <td style={{border: "1px solid teal"}}>MAKE PLAYER BOX TODAY!!</td>
            </tr>
          </tbody>
      </table>
    </div>
  );
}

export default Play;
