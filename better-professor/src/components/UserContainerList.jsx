import React,{useState, useEffect} from "react"
import axios from 'axios';
import S from 'styled-components';

import UserCard from './UserCard.jsx';


const UserContainerList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect( () => {   
        axios.get(`localhost:5000/users/register`)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }, [])


    return(
        <StyledContainer>

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

export default UsereContainerList