// This allows us to automate the process of authorization. It attaches
// our authorization token to the header of any axios call needing 
// authorized by the server

import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({      
    baseURL: "https://better-professor-backend.herokuapp.com",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
