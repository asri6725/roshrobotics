import './App.css';
import Home from './Home';
import About from './About';
import Terabot from './bots/Terabot';
import ForkLift from './bots/ForkLift';
import Chair from './bots/Chair';
import Sprinkler from './bots/Sprinkler';

import React from 'react';

import logo_dark from './files/logo_transparent_dark.png';

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
        <div style={{"margin-top":"30px" ,"background-color":"#5481D1", "padding":"30px 30px", cursor:"default"}}>
          <div style={{display:"flex"}}>
                <i>
              <img src={logo_dark} style={{width:"42px", height:"42px"}}  />
              </i>
              <a style={{width:"fit-content", height:"fit-content", marginTop:"11px",marginLeft:"5px", color:"white"}}  >Roshan Chavan</a>
              </div>
        </div>
      </div>   
  );
 }
}

export default App;
