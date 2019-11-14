import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AComponent from "./components/AComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation component={Navigation} />
        <Route exact path="/"/>
        <Route exact path="/Login" component={Login} />
        <ProtectedRoute exact path="/AComponent" component={AComponent} />
      </div>
    </Router>
  );
}

export default App;

