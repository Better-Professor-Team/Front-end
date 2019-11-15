import axios from "axios";

export const GET_STUDENTS = "GET_STUDENTS";
export const SEE_STUDENTS = "SEE_STUDENTS";
export const ERR_STUDENTS = "ERR_STUDENTS";
export const ADD_STUDENTS = "ADD_STUDENTS";
export const DEL_STUDENTS = "DEL_STUDENTS";

export const ADD_MESSAGES = "ADD_MESSAGES";
export const GET_MESSAGES = "GET_MESSAGES";
export const DEL_MESSAGES = "DEL_MESSAGES";

export const ADD_PROJECTS = "ADD_PROJECTS";
export const GET_PROJECTS = "GET_PROJECTS";
export const DEL_PROJECTS = "DEL_PROJECTS";

export const getStudents = () => dispatch => {
  dispatch({ type: GET_STUDENTS });
  axios
    .get()
    .then()
    .catch();
};

export const addStudents = student => dispatch => {
  axios
    .post()
    .then()
    .catch();
};

export const delStudents = student => dispatch => {
  axios
    .delete()
    .then()
    .catch();
};

export const getMessages = () => dispatch => {
  dispatch({ type: GET_MESSAGES });
  axios
    .get()
    .then()
    .catch();
};

export const addMessages = message => dispatch => {
  axios
    .post()
    .then()
    .catch();
};

export const delMessage = message => dispatch => {
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

export const addProjects = project => dispatch => {
  axios
    .put()
    .then()
    .catch();
};

export const delProjects = project => dispatch => {
  axios
    .delete()
    .then()
    .catch();
};
