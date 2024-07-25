import { useEffect } from "react";

import * as userService from "../services/userService";
import Path from "../paths";

export default function Logout({
    setAuthHandler
}) {

    useEffect(() => {
        userService.logout()
            .then(result => {
                setAuthHandler({});
                localStorage.removeItem("accessToken");
                navigate(Path.Home);
            })
            .catch(err => console.log(err));

    }, []);

    return null;
};