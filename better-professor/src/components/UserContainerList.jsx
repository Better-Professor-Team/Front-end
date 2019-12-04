import React, { useState, useEffect } from "react";
import S from "styled-components";
import { axiosWithAuth } from "./API/Auth";

import UserCard from "./UserCard.jsx";

const UserContainerList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get(`/students/user/1`)
    .then(response => {
      console.log(response.data);
      setUsers(response.data);
    })
    .catch(error => {
      console.error(error);
    });
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
