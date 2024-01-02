import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextData } from '../../context/AppData';

const Admin = () => {

    const navigate = useNavigate();
    const { users } = useContext(ContextData)



    const goToUser = (user) => {
        navigate(`/users/${user.id}`);
    }

    return (
        <div>
            <table border={1}>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>POST</td>
                    <td>WORK</td>
                </tr>
                {
                    users.map((user) => {
                        return <tr onClick={() => goToUser(user)}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.post}</td>
                            <td>{user.work}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default Admin
