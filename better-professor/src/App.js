// Here we bring all the components together to comprise our complete application.

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AComponent from "./components/AComponent";
import Welcome from "./components/Welcome";


function App() {
  return (
    // Router, is a functionality of React that allows us to have links to other
    // parts of our page. Normally, clicking a link will take you to an entirely
    // separate page and reload the dom however, Router mounts and un-mounts components
    // to simulate a link. The "path" defines what is displayed as the URL and the 
    // "component" is what we want to display.
    <Router>
      <div className="App">
        <Navigation component={Navigation} />
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/AComponent" component={AComponent} />
      </div>
    </Router>
  );
}



export default App;

