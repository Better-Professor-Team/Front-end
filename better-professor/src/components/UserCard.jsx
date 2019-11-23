import React from "react"
import S from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const UserCard = (props) => {
    const { student_name, major } = props.users;
    return (
        <Card>
            <UserActionsContainer>
                <UserTextInformation primary>Name: {student_name}</UserTextInformation>
                <UserTextInformation>Major: {major}</UserTextInformation>
            </UserActionsContainer>
            <EditButton className="iconHover"><FontAwesomeIcon className="icon" icon={faPlus} /></EditButton>
            <UserActionsContainer>
                <StyledButton primary>Message</StyledButton>
            </UserActionsContainer>
        </Card>
    );
}

export default UserCard;

const Card = S.div`
    display: flex;
    flex-flow: row wrap;
    background: linear-gradient(150deg, rgba(1,22,38,1) 0%, rgba(6,64,110,1) 100%);
    width: 25%;
    padding: 20px;
    margin: 10px;
    box-sizing: border-box;
    border-radius: 35px;
    justify-content: space-between;
`;
const UserTextInformation = S.p`
    font-size: ${props => props.primary ? '24px' : '20px'};
    color: #fff;
    margin: 10px;
    font-weight: 400;
    width: 100%;
`;
const UserActionsContainer = S.div`
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 20px 0;
`;
const StyledButton = S.div`
    font-size: 20px;
    color: #fff;
    border-radius: 10px;
    background-color: #000;
    margin: 10px 0;
    padding: 10px;
    &: hover {
        background-color: ${props => props.primary ? '#fff' : '#000'}
        color: #000;
        cursor: pointer;
    }
`;
const EditButton = S.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 50%;
    background-color: #000;
    &: hover {
        background-color: #fff;
        cursor: pointer;
    }
`;