import React, { useState, useEffect } from "react"
import axios from 'axios';
import S from 'styled-components';

import UserCard from './UserCard.jsx';


const UserContainerList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            await axios.get(`http://localhost:5000/students/user/1`)
                .then(response => {
                    console.log(response.data);
                    setUsers(response.data);
                })
                .catch(error => console.log(error));
        }
        apiCall();
    }, []);


    return (
        <StyledContainer>
            {users.map((users, index) => {
                return (
                    <UserCard
                        key={index}
                        users={users}
                    />
                );


            })}
        </StyledContainer>
    );
}

export default UserContainerList;

const StyledContainer = S.section`
    width: 100%;
    height: 100%;
    background-color: #d6d6d6;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`;