import React from "react";
import { withFormik, setStatus } from "formik";
import * as Yup from "yup";

import {
  StyledFormikForm,
  FormikField,
  StyledButton,
  StyledLabel,
  ErrorMessage
} from "./FormStyledComponents";
import { axiosWithAuth } from "./API/Auth";

const FormikForm = ({ values, handleChange, errors, touched, status }) => {
  return (
    <StyledFormikForm>
      <StyledLabel secondary="true">
        {" "}
        Students Name
        <FormikField
          type="text"
          label="Students Name"
          name="student_name"
          placeholder="Students Name"
          value={values.student_name}
        />
        {touched.student_name && errors.student_name && (
          <ErrorMessage>{errors.student_name}</ErrorMessage>
        )}
      </StyledLabel>

      <StyledLabel secondary="true">
        {" "}
        Major
        <FormikField
          label="Course"
          type="text"
          name="major"
          placeholder="Major"
          value={values.major}
        />
        {touched.major && errors.major && (
          <ErrorMessage>{errors.major}</ErrorMessage>
        )}
      </StyledLabel>

      <StyledLabel secondary="true">
        {" "}
        Professor Id
        <FormikField
          label="Professor Id"
          type="number"
          name="user_id"
          placeholder="Associated Professor Name"
          value={values.user_id}
        />
        {touched.user_id && errors.user_id && (
          <ErrorMessage>{errors.user_id}</ErrorMessage>
        )}
      </StyledLabel>

      <StyledButton secondary="true" type="submit">
        Add Student
      </StyledButton>
    </StyledFormikForm>
  );
};

const EditUserForm = withFormik({
  mapPropsToValues({ student_name, major, user_id }) {
    return {
      student_name: student_name || "",
      major: major || "",
      user_id: user_id || ""
    };
  },
  validationSchema: Yup.object().shape({
    student_name: Yup.string().required("Please enter a valid Student Name"),
    major: Yup.string().required("Please enter a major"),
    user_id: Yup.string().required("Please enter a professors name")
  }),

  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
    .post('/students', values)
      .then(response => {
        console.log(response);
        setStatus(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(FormikForm);

export default EditUserForm;
