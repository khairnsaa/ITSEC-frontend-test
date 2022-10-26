import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
    const [ user, setUser ] = useState({ username: 'admin', password: '123456'})
    const [ loginStatus, setLoginStatus ] = useState(false)

    return (
        <LoginContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
            {children}
        </LoginContext.Provider>
    )
}