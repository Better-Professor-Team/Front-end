// This is the component supplies the login functionality.
// Here we display the inputs for logging in, set those fields as state, submit
// the state to the server, wait for a response from the server, save the response
// as a token on local memory then we mount the protected component.

import React, { useState } from "react";
import axios from 'axios';
import S from 'styled-components';
import { Link } from "react-router-dom";


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
    {/* //   <form onSubmit={handleSubmit}>
    //     <input */}

    {/* //       value={credentials.username}
    //       onChange={handleChange}
    //     />
    //     <input */}

    {/* //     />
    //     <button type='submit' >Log in</button>
    //   </form> */}
    <Form action="login" method="post" onSubmit={handleSubmit}>
        <Title>Login</Title>
        {/* <StyledText secondary="true" >Email</StyledText> */}
        <StyledInput 
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange} 
          value={credentials.username} 
        />
        {/* <StyledText secondary="true">Password</StyledText> */}
        <StyledInput 
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <StyledButton type="submit" secondary="true" >Login</StyledButton>
        <StyledText>New to Mentorship? <StyledSignup to="/signup">Sign Up Now</StyledSignup> </StyledText>
        <StyledLink to="/forgot-credentials">Can't Login?</StyledLink>
      </Form>
    </div>

  )
};

export default Login;

// const FormContainer = S.div`
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     background-repeat: no-repeat;
//     background-image: url(${BGImg});
//     height: 100vh;
//     background-position: center;
//     background-size: cover;
// `;
const Form = S.form`
    width: 30%;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0px 10px 20px -3px #000;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: space-around;
  `;
const Title = S.h2`
    font-size: 40px;
    color: #000;
    text-transform: uppercase;
  `;
const StyledLink = S(Link)`
    font-size: 18px;
    text-decoration: underline;
    color: #666;
    transition: all ease-in-out 100ms;
    :hover {
        color: #000;
    }
  `;

const StyledInput = S.input`
    width: 80%;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 50px;
  `;
const StyledButton = S.button`
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  align-items: center;
  font-size: 20px;
  color: ${props => props.secondary ? '#fff' : '#000'};
  padding: 10px 2.4px;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => props.secondary ? '#0077ff' : 'transparent'}
  transition: all ease-in-out 120ms;
  height: 40px;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  :hover {
      background-color: ${props => props.secondary ? '#003c80' : 'rgba(194, 194, 194, 0.4)'}
  }
  :active {
      box-shadow: 0px 2px 5px 0px #464545;
      transform: scale(1.1);
  }
  `;

const StyledSignup = S(Link)`
    font-size: 22px;
    color: #9d66ff;
    margin-left: 10px;
    display: flex;
    align-items: center;
    height: 20px;
    transition: all ease-in-out 120ms;
    padding: 0;
    :hover {
      letter-spacing: 1px;
    }
  `;
const StyledText = S.span`
  font-size: 18px;
  display: flex;
  text-align: ${props => props.secondary ? 'left' : 'center'}
  width: ${props => props.secondary ? '80%' : 'auto'}
  margin: 0 auto;
`;

