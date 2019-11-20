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
        <StyledButton secondary="true" type="submit" >Login</StyledButton>
        <StyledText>New to Better Professor? <StyledSignup to="/signup">Sign Up Now</StyledSignup> </StyledText>
      </StyledFormikForm>
    </div>
  );
};

const Login = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter a valid email address"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, { setStatus }) {
    // e.preventDefault();
    axios
      .post("https://better-professor-backend.herokuapp.com/users/login", values)
      .then(res => {
        console.log(res);
        setStatus(res.data.name)
      })
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
