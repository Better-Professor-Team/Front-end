import React from "react"
import S from 'styled-components';


const UserCard = (props) => {
    const {student_name, major, id} = props.users;
    return(
        <Card>
            <UserTextInformation>{student_name}</UserTextInformation>
            <UserTextInformation>{major}</UserTextInformation>
        </Card>
    );
}

export default UserCard;

const Card = S.div`
    width: 30%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const UserTextInformation = S.p`
    font-size: 20px;
    color: #000;
    font-weight: 400;
`;