import React from "react";
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import S from "styled-components";

const FormikForm = ({ values, handleChange, errors, touched, status }) => {

  return (
    <div className="login">
      <StyledFormikForm>
        <Title>Register</Title>
        <StyledLabel secondary="true" >First Name
        <FormikField
            type="text"
            label="first_name"
            name="first_name"
            placeholder="First Name"
            value={values.first_name}
          />
          {touched.first_name && errors.first_name && <ErrorMessage>{errors.first_name}</ErrorMessage>}
        </StyledLabel>

        <StyledLabel secondary="true" >Last Name
        <FormikField
            type="text"
            label="last_name"
            name="last_name"
            placeholder="Last name"
            value={values.last_name}
          />
          {touched.last_name && errors.last_name && <ErrorMessage>{errors.last_name}</ErrorMessage>}
        </StyledLabel>

        <StyledLabel secondary="true" >Username
        <FormikField
            type="username"
            label="Username"
            name="username"
            placeholder="username"
            value={values.username}
          />
          {touched.username && errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </StyledLabel>

        <StyledLabel secondary="true" >Password
        <FormikField
            type="password"
            label="Password"            
            name="password"
            placeholder="password"
            value={values.password}
          />
          {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </StyledLabel>
        <StyledButton secondary="true" type="submit" >Sign Up</StyledButton>
      </StyledFormikForm>
    </div>
  );
};

const SignupForm = withFormik({
  mapPropsToValues({ username, password, first_name, last_name }) {
    return {
      username: username || "",
      password: password || "",
      first_name: first_name || "",
      last_name: last_name || "",
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://better-professor-backend.herokuapp.com/users/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data.name)
        localStorage.setItem('token', res.data.token)
      }
      )
      .catch(err => {
        console.log(err);
      });
  }
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
  color: ${props => (props.secondary ? "#fff" : "#000")};
  padding: 10px 24px;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => (props.secondary ? "#0077ff" : "transparent")}
  transition: all ease-in-out 120ms;
  height: 40px;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  :hover {
      background-color: ${props =>
        props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"}
  }
  :active {
      box-shadow: 0px 2px 5px 0px #464545;
      transform: scale(1.1);
  }
  `;
const StyledLabel = S.label`
  font-size: 18px;
  display: flex;
  text-align: ${props => (props.secondary ? "left" : "center")}
  width: ${props => (props.secondary ? "80%" : "auto")}
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
