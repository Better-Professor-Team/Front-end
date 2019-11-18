import axios from "axios";

export const GET_STUDENTS = "GET_STUDENTS";
export const SEE_STUDENTS = "SEE_STUDENTS";
export const EDIT_STUDENTS = "EDIT_STUDENTS";
export const ERR_STUDENTS = "ERR_STUDENTS";
export const ADD_STUDENTS = "ADD_STUDENTS";
export const DEL_STUDENTS = "DEL_STUDENTS";

export const ADD_MESSAGES = "ADD_MESSAGES";
export const GET_MESSAGES = "GET_MESSAGES";
export const DEL_MESSAGES = "DEL_MESSAGES";

export const ADD_PROJECTS = "ADD_PROJECTS";
export const GET_PROJECTS = "GET_PROJECTS";
export const DEL_PROJECTS = "DEL_PROJECTS";

//Untested to see if We get data back from the API.

export const getStudents = () => dispatch => {
  dispatch({ type: GET_STUDENTS });
  axios
    .get(`localhost:5000/students/user/${user_id}`)
    .then()
    .catch();
};

export const addStudents = students => dispatch => {
  axios
    .post(`localhost:5000/students`)
    .then()
    .catch();
};

export const delStudents = students => dispatch => {
  axios
    .delete(`localhost:5000/students/${student_id}`)
    .then()
    .catch();
};

export const editStudents = students => dispatch => {
  axios
    .put(`localhost:5000/students/${student_id}`)
    .then()
    .catch();
};

export const getMessages = () => dispatch => {
  dispatch({ type: GET_MESSAGES });
  axios
    .get(`localhost:5000/messages/students/${student_id}`)
    .then()
    .catch();
};

export const addMessages = messages => dispatch => {
  axios
    .post(`localhost:5000/messages`)
    .then()
    .catch();
};

export const delMessage = messages => dispatch => {
  axios
    .delete()
    .then()
    .catch();
};

export const getProjects = () => dispatch => {
  dispatch({ type: GET_PROJECTS });
  axios
    .get()
    .then()
    .catch();
};

export const addProjects = projects => dispatch => {
  axios
    .put()
    .then()
    .catch();
};

export const delProjects = projects => dispatch => {
  axios
    .delete()
    .then()
    .catch();
};
