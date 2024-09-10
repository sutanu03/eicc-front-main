// src/context/UserContext.js

import { createContext, useContext, useState } from 'react';

export const UserContext = createContext(null);

function UserProvider({ children }) {
    const [token, setToken] = useState(null);
    //console.log(token, " from context");

    return (
        <UserContext.Provider value={{ token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
