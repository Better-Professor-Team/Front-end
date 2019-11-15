import {
  GET_STUDENTS,
  SEE_STUDENTS,
  ERR_STUDENTS,
  ADD_STUDENTS
} from "../Actions/actions";

const initialState = {
  students: [],
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

    default:
      return state;
  }
};
