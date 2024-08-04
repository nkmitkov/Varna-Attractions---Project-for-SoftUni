import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../services/userService";
import Path from "../paths";
import AuthContext from "../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { setAuthHandler } = useContext(AuthContext);

    useEffect(() => {
        userService.logout()
            .then(result => {
                setAuthHandler({});
                localStorage.removeItem("auth");
                navigate(Path.Home);
            })
            .catch(err => console.log(err));

    }, []);

    return null;
};