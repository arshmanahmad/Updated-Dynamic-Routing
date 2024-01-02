import React, { createContext, useState } from 'react'

const ContextData = createContext()

const AppData = ({ children }) => {

    const [singleUser, setSingleUser] = useState({});

    const users = [
        { id: 1, name: "Shuja", post: "Senior", work: "debugging" },
        { id: 2, name: "Shuja1", post: "Senior", work: "debugging" },
        { id: 3, name: "Shuja2", post: "Senior", work: "debugging" },
        { id: 4, name: "Shuja3", post: "Senior", work: "debugging" },
    ];

    return (
        <ContextData.Provider value={{ singleUser, setSingleUser, users }}>
            {children}
        </ContextData.Provider>
    )
}

export default AppData
export { ContextData }