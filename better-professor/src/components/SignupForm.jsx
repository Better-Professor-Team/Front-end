import React, { useState, useEffect } from 'react';
import S from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const FormikForm = ({ values, handleChange, errors, touched, status }) => {

  return (
    <div className="login">
      <StyledFormikForm>
        <Title>Sign Up</Title>
        <StyledLabel secondary="true" >Email Address
        <FormikField
          type="email"
          label="Email"
          name="email"
          placeholder="email"
          value={values.email}
        />
        {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>} 
         </StyledLabel>

        <StyledLabel secondary="true" >Password
        <FormikField
          label="Email"
          type="password"
          name="password"
          placeholder="email"
          value={values.password}
        />
        {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </StyledLabel>
        <StyledButton secondary="true" type="submit" >Get Started</StyledButton>
      </StyledFormikForm>
    </div>
  );
}
const SignupForm = withFormik({
  mapPropsToValues({ email, password}) {
      return {
          email: email || "",
          password: password || ""
      }
  },
  validationSchema: Yup.object().shape({
      email: Yup.string().required("Please enter a valid email address"),
      password: Yup.string().required("Please enter a password")
    })
})(FormikForm);
export default SignupForm;

const StyledFormikForm = S(Form)`
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

const FormikField = S(Field)`
    width: 80%;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 50px;
    margin-top: 10px;
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
const StyledLabel = S.label`
  font-size: 18px;
  display: flex;
  text-align: ${props => props.secondary ? 'left' : 'center'}
  width: ${props => props.secondary ? '80%' : 'auto'}
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
`;

const ErrorMessage = S.p`
    font-size: 14px;
    font-weight: 500;
    color: red;
    width: 100%;
`;
