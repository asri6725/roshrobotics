import './App.css';
import Home from './Home';
import About from './About';
import Terabot from './Terabot';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <div className="navbar">
      
      <div style={{"width":"40%", "float":"left","margin-left":"5%","text-align":"left", "text-decoration": "none"}}>
        <h4 className="Title"> Roshan's Robotics </h4>
      </div>
      
        <div style={{"width":"50%", "float":"right"}} className="buttons">
        <a href="/Terabot">Terabot</a>
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

export default App;
