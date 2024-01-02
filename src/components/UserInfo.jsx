import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ContextData } from '../context/AppData';

const UserInfo = () => {

    const location = useLocation();
    const userId = location.pathname.split('/').pop();

    const [userInfo, setUserInfo] = useState({})
    const [count, setCount] = useState(1)
    const { users } = useContext(ContextData)

    const getUserInfo = (id) => {
        const singleUser = users.filter((user) => {
            return user.id === id;
        })

        return singleUser[0]
    }

    useEffect(() => {
        console.log("useEffect");
        setUserInfo(getUserInfo(parseInt(userId)));
    }, [])

    console.log("first render");


    return (
        <div>
            {/* {count}
            <button onClick={() => setCount(count + 1)}>Inc</button> */}
            ID: {userInfo.id}
            <br />
            NAME: {userInfo.name}
        </div>
    )
}

export default UserInfo
