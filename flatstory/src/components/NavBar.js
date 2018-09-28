import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import LoginButtonContainer from './LoginButtonContainer';

const NavBar = () => {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const linkTwo = {
    padding: '14px',
    margin: '6px 6px 6px',
    color: 'white',
    border: '1px solid orange'
  }

  return (
    <div className = "NavBar" style = {linkTwo}>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >About</NavLink>
        <NavLink
          to="/play"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Play</NavLink>
        {/* <NavLink>
        <LoginButtonContainer>
            Login
        </LoginButtonContainer>
        </NavLink>  */}
  </div>
  );
};

export default NavBar;
