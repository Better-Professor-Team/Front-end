import S from "styled-components";
import {
    Form,
    Field
} from "formik";
import {
    Link
} from "react-router-dom";

const StyledFormikForm = S(Form)
`
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
const StyledLink = S(Link)
`
    font-size: 18px;
    text-decoration: underline;
    color: #666;
    transition: all ease-in-out 100ms;
    :hover {
        color: #000;
    }
  `;
const FormikField = S(Field)
`
    width: 90%;
    font-size: 20px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 50px;
  `;
const StyledButton = S.button `
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  align-items: center;
  font-size: 20px;
  color: ${props => (props.secondary ? "#fff" : "#000")};
  padding: 10px 2.4px;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => (props.secondary ? "#0077ff" : "transparent")}
  transition: all ease-in-out 120ms;
  height: 40px;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  :hover {
      background-color: ${props =>
        props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"}
  }
  :active {
      box-shadow: 0px 2px 5px 0px #464545;
      transform: scale(1.1);
  }
  `;
const StyledLabel = S.label `
  font-size: 18px;
  display: flex;
  text-align: ${props => (props.secondary ? "left" : "center")}
  width: ${props => (props.secondary ? "100%" : "auto")}
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  font-weight: 600;
`;
const ErrorMessage = S.p `
    font-size: 14px;
    font-weight: 500;
    color: red;
    width: 100%;
`;
const Title = S.h2 `
    font-size: 40px;
    color: #000;
    text-transform: uppercase;
  `;
const StyledText = S.span `
  font-size: 18px;
  display: flex;
  text-align: ${props => (props.secondary ? "left" : "center")}
  width: ${props => (props.secondary ? "80%" : "auto")}
  margin: 0 auto;
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
export {
    StyledFormikForm,
    StyledLink,
    FormikField,
    StyledButton,
    StyledLabel,
    ErrorMessage,
    Title,
    StyledText,
    StyledSignup
};