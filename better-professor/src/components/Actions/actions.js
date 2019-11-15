import axios from "axios";

export const GET_STUDENTS = "GET_STUDENTS";
export const SEE_STUDENTS = "SEE_STUDENTS";
export const ERR_STUDENTS = "ERR_STUDENTS";
export const ADD_STUDENTS = "ADD_STUDENTS";

export const fetchStudents = () => dispatch => {
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
