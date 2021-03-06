import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Play from './components/Play';
import ContentBox from './containers/ContentBox'
import LoginButtonContainer from './components/LoginButtonContainer';
import Lore from './components/Lore';


import GamePlay from './components/GamePlay'
import Devs from './components/Devs'


class App extends Component {
  render() {
    const style = {
      border: '1px solid red',
      padding: '6px',
      margin: '6px 6px 6px',
      height: '800px',
      resize: 'inherit',
  }
  console.log("routing");
    return (
      <div className="container">
      <Router>
        <div>
          <NavBar />
          <ContentBox style={style}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/play" component={Play}/>
            <Route exact path="/lore" component={Lore}/>
            <Route exact path="/gameplay" component={GamePlay}/>
            <Route exact path="/devs" component={Devs}/>
          </ContentBox>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
