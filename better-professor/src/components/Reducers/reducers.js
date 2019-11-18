import {
  GET_STUDENTS,
  SEE_STUDENTS,
  ERR_STUDENTS,
  ADD_STUDENTS,
  DEL_STUDENTS,
  ADD_MESSAGES,
  GET_MESSAGES,
  DEL_MESSAGES,
  ADD_PROJECTS,
  GET_PROJECTS,
  DEL_PROJECTS,
  EDIT_STUDENTS
} from "../Actions/actions";

const initialState = {
  //the data types still need to be confirmed as to what they will be returned from the api calls.
  students: [],
  projects: [],
  messages: [],
  isFetching: false,
  error: "error"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        isFetching: true
      };

    case SEE_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        isFetching: false
      };

    case ERR_STUDENTS:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case ADD_STUDENTS:
      return {
        ...state,
        students: action.payload.data
      };

    case DEL_STUDENTS:
      return {
        ...state,
        students: action.payload.data
      };

    case EDIT_STUDENTS:
      return {
        ...state,
        students: action.payload.data
      };

    case ADD_MESSAGES:
      return {
        ...state,
        messages: action.payload.data
      };

    case GET_MESSAGES:
      return {
        ...state,
        isFetching: true
      };

    case DEL_MESSAGES:
      return {
        ...state,
        messages: action.payload.data
      };

    case GET_PROJECTS:
      return {
        ...state,
        isFetching: true
      };

    case ADD_PROJECTS:
      return {
        ...state,
        projects: action.payload.data
      };

    case DEL_PROJECTS:
      return {
        ...state,
        projects: action.payload.data
      };

    default:
      return state;
  }
};
