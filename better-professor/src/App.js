// Here we bring all the components together to comprise our complete application.

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.scss";
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Welcome from "./components/Welcome";
import UserContainerList from "./components/UserContainerList";
import EditUserForm from "./components/EditUserForm";
import S from 'styled-components';
import './fonts.css';



function App() {
  return (
    // Router, is a functionality of React that allows us to have links to other
    // parts of our page. Normally, clicking a link will take you to an entirely
    // separate page and reload the dom however, Router mounts and un-mounts components
    // to simulate a link. The "path" defines what is displayed as the URL and the 
    // "component" is what we want to display.
    <Router>
      <StyledDiv className="App">
        <Navigation component={Navigation} />
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={SignupForm} />
        <ProtectedRoute exact path="/students" component={UserContainerList} />
        <ProtectedRoute exact path="/add-user" component={EditUserForm} />
      </StyledDiv>
    </Router>
  );
}



export default App;

const StyledDiv = S.div`
background-color: #000000db;
margin: 0;
`;