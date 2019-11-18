import React,{useState, useEffect} from 'react';
import S from 'styled-components';
import {Link} from "react-router-dom";
import axios from 'axios';

  const SignupForm = (props) => {
    // create a user object.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmail = (event) => {
      setEmail(event.target.value);
    }
    const handlePassword = (event) => {
      setPassword(event.target.value);
    }

    // Boiler Plate Post Call.
    const handleSignUp = (event) => {
      event.preventDefault();
        axios.post(`/signup`, {email, password}, {  
          headers: {
            'content-type': 'application/json' // Tell the server we are sending this over as JSON
          },
        })
        .then(function (response) {
          console.log(response);
          props.history.push("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    return(
        <div className="login">
            <Form action="/signup" method="post" onSubmit={handleSignUp}>
                <Title>Sign Up</Title>
                <StyledText secondary="true" >Email Address</StyledText>
                <StyledInput label="Email" type="email" onChange={handleEmail} value={email}/>
                <StyledText secondary="true" >Password</StyledText>
                <StyledInput label="Email" type="password" onChange={handlePassword} value={password}/>
                <StyledButton secondary="true" type="submit" >Get Started</StyledButton>
            </Form>
        </div>
      );
  }

  export default SignupForm;

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
  padding: 10px 24px;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => props.secondary ? '#0077ff' : 'transparent'}
  transition: all ease-in-out 120ms;
  height: 40px;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
    color: #003c80;
    margin-left: 10px;
    display: flex;
    align-items: center;
    height:  20px;
    transition: all ease-in-out 120ms;
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
