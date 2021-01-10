import './App.css';
import Home from './Home';
import About from './About';
import Terabot from './Terabot';

import {Menu, MenuItem, Typography, Link} from '@material-ui/core';
import React from 'react';


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

  handleClick = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render(){
  
   
  return (
    <div className="App">
      
      <Router>
      <div>
      <div className="navbar">
      
      <div style={{"width":"40%", "float":"left","margin-left":"5%","text-align":"left", "text-decoration": "none"}}>
        <Link style={{ textDecoration: 'none' }} href="/"><Typography variant="h6" style={{'margin-top':'5px'}}>
            Roshans Robotics
          </Typography>
          </Link>
      </div>
      
        <div style={{"width":"50%", "float":"right"}} className="buttons">
          <a href="/Contact"> Contact </a>
          <a aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
            Robots
          </a>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          
          >
          <Link style={{ textDecoration: 'none' }} href="/Terabot"><MenuItem onClick={this.handleClose}>Terabot</MenuItem></Link>
          <Link style={{ textDecoration: 'none' }} href="/Chair"><MenuItem onClick={this.handleClose}>Chair</MenuItem></Link>
          <Link style={{ textDecoration: 'none' }} href="/ForkLift"><MenuItem onClick={this.handleClose}>Forklift</MenuItem></Link>
          <Link style={{ textDecoration: 'none' }} href="/Sprinkler"><MenuItem onClick={this.handleClose}>Sprinkler</MenuItem></Link>
        </Menu>
       
        <a href="/about">About</a>
        <a href="/">Home</a>
        </div>
        </div>
      <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
        </Switch>
      </div>

    </Router>
    </div>
  );
 }
}

export default App;
