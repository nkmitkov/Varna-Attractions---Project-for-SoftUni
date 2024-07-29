import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = usePersistedState("auth", {});

    const setAuthHandler = (user) => setAuth(user);

    const values = {
        setAuthHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        avatar: auth.avatar,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;