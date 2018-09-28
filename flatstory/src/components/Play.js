import React from 'react';
import GameContainer from '../containers/GameContainer';

const Play = () => {

  return (
    <div align="CENTER" >
      Play Page
      <table>
          <tr>
              <td style={{border: "1px solid purple"}}><GameContainer/></td>
              <td style={{border: "1px solid teal"}}>PUT PLAYER CONTAINER HERE</td>
          </tr>
      </table>
    </div>
  );
}

export default Play;