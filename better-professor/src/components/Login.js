// This is the component supplies the login functionality.
// Here we display the inputs for logging in, set those fields as state, submit
// the state to the server, wait for a response from the server, save the response
// as a token on local memory then we mount the protected component.

import React, { useState } from "react";
import axios from 'axios';


const Login = props => {
  // Here we define initial state.
  const [credentials, setCredentials] = useState({
    'username': "",
    'password': ""
  });

  // This function sets what we type into the input fields to our state. 
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // This, once we submit the login form, will send the state (username and password)
  // to the server to be authenticated. Once the server authenticates us, the server 
  // replies with a token. We then save that token to the local storage to be used is 
  // authorization. Finally we are routed to our protected component.
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://better-professor-backend.herokuapp.com/users/login', credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/AComponent');
      });
  };

// Here, we return our login form. This is what is actually displayed as our login component.
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type='submit' >Log in</button>
      </form>
    </div>
  );
};

export default Login;
