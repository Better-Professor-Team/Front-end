import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import S from 'styled-components';
import { StyledFormikForm, StyledLink, FormikField, StyledButton, StyledLabel, ErrorMessage} from './FormStyledComponents';


const FormikForm = ({ values, handleChange, errors, touched, status }) => {
    return(
        <StyledFormikForm>
        <StyledLabel secondary="true" > Students Name
        <FormikField
          type="text"
          label="Students Name"
          name="studentsName"
          placeholder="Students Name"
          value={values.studentsName}
        />
        {touched.studentsName && errors.studentsName && <ErrorMessage>{errors.studentsName}</ErrorMessage>} 
         </StyledLabel>

        <StyledLabel secondary="true" > Courses
        <FormikField
          label="Course"
          type="text"
          name="courses"
          placeholder="Courses"
          value={values.courses}
        />
        {touched.courses && errors.courses && <ErrorMessage>{errors.courses}</ErrorMessage>}
        </StyledLabel>

        <StyledLabel secondary="true" > Projects
        <FormikField
          label="Projects"
          type="text"
          name="projects"
          placeholder="projects"
          value={values.projects}
        />
        {touched.projects && errors.projects && <ErrorMessage>{errors.projects}</ErrorMessage>}
        </StyledLabel>

        <StyledLabel secondary="true" > Grade
        <FormikField
          label="Grade"
          type="text"
          name="grade"
          placeholder="grade"
          value={values.grade}
        />
        {touched.grade && errors.grade && <ErrorMessage>{errors.grade}</ErrorMessage>}
        </StyledLabel>


        <StyledButton secondary="true" type="submit" >Get Started</StyledButton>
      </StyledFormikForm>
    );
}

const EditUserForm = withFormik({
    mapPropsToValues({ studentsName, courses, projects, grade}) {
        return {
            studentsName: studentsName || "",
            courses: courses || "",
            projects: projects || "", // Change to array since it will be a list of projects.
            grade: grade || "",
        }
    },
    validationSchema: Yup.object().shape({
        studentsName: Yup.string().required("Please enter a valid Student Name"),
        courses: Yup.string().required("Please enter a course"),
        projects: Yup.string().required("Please enter one project at minimal"),
        grade: Yup.string().required("Please enter a the students grade")
      })
})(FormikForm);

export default EditUserForm;

