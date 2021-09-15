import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Pokemon, Contact } from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* This is where I would add more Paths for links to the new component */}
          <Route path="/" exact component={() => <Home />} />
          <Route path="/pokemon" exact component={() => <Pokemon />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
