import React, { useState, useEffect } from "react";
import axios from "axios";
import S from "styled-components";
import { axiosWithAuth } from "./API/Auth";

import UserCard from "./UserCard.jsx";

const UserContainerList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://better-professor-backend.herokuapp.com/students/user/1`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <StyledContainer>
      {users.map((users, index) => {
        return <UserCard key={index} users={users} />;
      })}
    </StyledContainer>
  );
};

export default UserContainerList;

const StyledContainer = S.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;
