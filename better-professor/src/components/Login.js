import React from "react";
import axios from 'axios';
import { withFormik } from 'formik';
import * as Yup from "yup";
import {
  StyledFormikForm,
  FormikField,
  StyledButton,
  StyledLabel,
  Title,
  StyledSignup,
  StyledText,
  ErrorMessage
} from './FormStyledComponents';



const FormikForm = ({ values, handleChange, errors, touched, status }) => {

  return (
    <div className="login">
      <StyledFormikForm>
        <Title>Login</Title>
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
        <StyledButton secondary="true" type="submit" >Login</StyledButton>
        <StyledText>New to Better Professor? <StyledSignup to="/signup">Sign Up Now</StyledSignup> </StyledText>
      </StyledFormikForm>
    </div>
  );
};

const Login = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a valid username"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://better-professor-backend.herokuapp.com/users/login", values)
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
  // Already built Submit Handler for old form..... 
  /* ---------------------------------------------------- */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('https://better-professor-backend.herokuapp.com/users/login', credentials)
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('token', res.data.token)
  //       props.history.push('/AComponent');
  //     });
  // };
})(FormikForm);


export default Login;
