import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../services/userService";
import Path from "../paths";

export default function Logout({
    setAuthHandler
}) {
    const navigate = useNavigate();

    useEffect(() => {
        userService.logout()
            .then(result => {
                localStorage.removeItem("accessToken");
                setAuthHandler({});
                navigate(Path.Home);
            })
            .catch(err => console.log(err));

    }, []);

    return null;
};