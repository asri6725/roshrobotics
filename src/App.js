import './App.css';
import Home from './Home';
import About from './About';
import Terabot from './bots/Terabot';
import ForkLift from './bots/ForkLift';
import Chair from './bots/Chair';
import Sprinkler from './bots/Sprinkler';

import React from 'react';

import logo from './files/logo/logo_transparent.png';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        anchorEl : false
    }
  }

  render(){ 
  return (
    <div className="App">
        
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Terabot">
              <Terabot />
            </Route>
            <Route exact path="/ForkLift">
              <ForkLift />
            </Route>
            <Route exact path="/Sprinkler">
              <Sprinkler />
            </Route>
            <Route exact path="/Chair">
              <Chair />
            </Route>
          </Switch>
        </Router>
        <div style={{"height":"100px", "width":"100%", "background-color":"#5481D1"}}>
          <p>
            This is where some logos will sit
          </p>
        </div>
      </div>   
  );
 }
}

export default App;
