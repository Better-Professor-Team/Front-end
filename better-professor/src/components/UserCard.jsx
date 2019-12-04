import React, { useContext, useState } from "react";
import S from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UsersContext from "./contexts/UsersContext";
import {
  StyledFormikForm,
  FormikField,
  StyledLabel,
  ErrorMessage
} from "./FormStyledComponents";
import { axiosWithAuth } from "./API/Auth";

const UserCard = props => {
        
  const [editing, setEditing] = useState(false);
  const [studentToEdit, setStudentToEdit] = useState(
    {
    student_name: '',
    major: '',
    user_id: ''
  }
  );
  const {
    setUsers,
    users
  } = useContext(UsersContext);
  const { student_name, major, id } = props.users;
  const editStudent = student => {
    setEditing(true);
    setStudentToEdit(student);
  };

  let student = {
    student_name: student_name,
    major: major,
    id: id
  };

  const saveEdit = e => {
    axiosWithAuth()
      .put(`/students/${studentToEdit.id}`, studentToEdit)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteUser = student => {
    axiosWithAuth()
      .delete(`/students/${student.id}`)
      .then(result => {
        setUsers(users.filter(student => student.id !== result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Card>
      <UserActionsContainer>
        <UserTextInformation primary>Name: {student_name}</UserTextInformation>
        <UserTextInformation>Major: {major}</UserTextInformation>
      </UserActionsContainer>
      <EditButton className="iconHover" onClick={() => editStudent(student)}>
        <FontAwesomeIcon className="icon" icon={faPlus} />
      </EditButton>
      <UserActionsContainer>
        <StyledButton primary>Message</StyledButton>
        <StyledButton
          primary
          onClick={e => {
            e.stopPropagation();
            deleteUser(student);
          }}
        >
          x
        </StyledButton>
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit student</legend>
            <label>
              student name:
              <input
                onChange={e =>
                  setStudentToEdit({
                    ...studentToEdit,
                    student_name: e.target.value
                  })
                }
                value={studentToEdit.student_name}
              />
            </label>
            <label>
              major:
              <input
                onChange={e =>
                  setStudentToEdit({
                    ...studentToEdit,
                    major: e.target.value
                  })
                }
                value={studentToEdit.major}
              />
            </label>
            <label>
              id:
              <input
                onChange={e =>
                  setStudentToEdit({
                    ...studentToEdit,
                    user_id: e.target.value
                  })
                }
                value={student.id}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </UserActionsContainer>
    </Card>
  );
};

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
    font-size: ${props => (props.primary ? "24px" : "20px")};
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
        background-color: ${props => (props.primary ? "#fff" : "#000")}
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
