import { useEffect, useState } from 'react';
import AuthContext from "../Auth/AuthContext";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const raw = localStorage.getItem("auth_user");
        return raw ? JSON.parse(raw) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("auth_user", JSON.stringify(user));
        } else {
            localStorage.removeItem("auth_user");
        }
    }, [user]);

    const login = (userData) => setUser(userData);
    const logOut = () => setUser(null);

    return (
        <AuthContext.Provider value={{user , login , logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider