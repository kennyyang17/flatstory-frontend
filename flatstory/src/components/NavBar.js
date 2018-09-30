import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import LoginButtonContainer from './LoginButtonContainer';
import NavDropdown from './NavDropdown';

const NavBar = () => {


  const linkTwo = {
    padding: '14px',
    margin: '6px 6px 6px',
    color: 'white',
    border: '1px solid orange'
  }

  return (
    <div className = "NavBar" style = {linkTwo}>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="navbar-brand" href="/">
            <NavLink to="/" exact>Home</NavLink>
            </a>
            </li>
        
            <li className="nav-item dropdown">
              {/* <a className="nav-link dropdown-toggle" href="/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <NavLink to="/about" exact >About</NavLink> */}

              <NavDropdown name="About">
                <a className="dropdown-item" href="/lore">Lore</a>
                <a className="dropdown-item" href="/gameplay">GamePlay</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/devs">Devs</a>
                </NavDropdown>
                {/* </a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
              <NavLink to="/play" exact >Play</NavLink>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;



