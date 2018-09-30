import React from 'react';
import DropDown from './DropDown';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Lore from './Lore';
import Devs from './Devs';

const About = () => {

  return (
    <div className="About">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <NavLink to="about/lore"><button class="dropdown-item">Lore</button></NavLink>
        <NavLink to="about/game"><button class="dropdown-item">Game</button></NavLink>
        <NavLink to="about/devs"><button class="dropdown-item">Devs</button></NavLink>
      </div>
      </div>
    </div>
  );
}

export default About;