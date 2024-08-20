import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";
import styles from "./LoginPage.module.css";
import AuthContext from "../../contexts/authContext";
import UserError from "../UserError/UserError";
import inputValidations from "../../utils/inputValidations";

const initialValues = {
    email: "",
    password: "",
};

export default function LoginPage() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(() => {
        const storedFormData = JSON.parse(localStorage.getItem("form"));
        
        if (storedFormData) {
            return {
                ...storedFormData,
                password: "",
            };
        }

        return initialValues;
    });
    const [userErrorMessage, setUserErrorMessage] = useState("");
    const { setAuthHandler } = useContext(AuthContext);

    localStorage.setItem("form", JSON.stringify({ email: formValues.email }));

    useEffect(() => {
        return () => localStorage.removeItem("form");
    }, []);
    
    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(initialValues);
        localStorage.removeItem("form");
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const inputErrorMessage = inputValidations("Login", formValues);

            if (inputErrorMessage) {
                throw new Error(inputErrorMessage);
            }
            
            const user = await userService.login(formValues);

            setAuthHandler(user);
            localStorage.setItem("auth", JSON.stringify(user));
            navigate("/attractions");
        } catch (error) {
            setFormValues(state => ({
                ...state,
                password: "",
            }));

            setUserErrorMessage(error.message);

            setTimeout(() => { setUserErrorMessage(""); }, 2500);
        }
    };

    return (
        <>
            <div className="container-fluid page-header">
                <div className="container">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ minHeight: 400 }}
                    >
                        <h3 className="display-4 text-white text-uppercase">Login</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Login form
                        </h6>
                        <h1>Login So You Can Help Others</h1>
                    </div>
                    <div className="row justify-content-center" style={{ width: "750px", margin: "auto" }}>
                        <div className="col-lg-8">
                            <div className="contact-form bg-white" style={{ padding: 30 }}>
                                <div id="success" />

                                {userErrorMessage && <UserError message={userErrorMessage} />}

                                <form name="login" id="loginForm" noValidate="novalidate" onSubmit={onSubmitHandler}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control p-4"
                                            id="email"
                                            placeholder="Email.."
                                            required="required"
                                            data-validation-required-message="Please enter an email"
                                            value={formValues.email}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control p-4"
                                            id="password"
                                            placeholder="Password.."
                                            required="required"
                                            data-validation-required-message="Please enter a password"
                                            value={formValues.password}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div className="text-center">
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${styles["buttons-margin"]}`}
                                            type="submit"
                                            id="loginButton"
                                        >
                                            Login
                                        </button>
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${styles["buttons-margin"]}`}
                                            type="button"
                                            id="resetButton"
                                            onClick={(e) => resetFormHandler()}
                                        >
                                            Reset
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};