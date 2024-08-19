import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./RegisterPage.module.css";
import * as userService from "../../services/userService";
import AuthContext from "../../contexts/authContext";
import UserError from "../UserError/UserError";
import inputValidations from "../../utils/inputValidations";

const initialValues = {
    username: "",
    email: "",
    password: "",
    rePassword: "",
    avatar: "",
};

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(() => {
        const storedFormData = JSON.parse(localStorage.getItem("form"));

        if (storedFormData) {
            return {
                ...storedFormData,
                password: "",
                rePassword: "",
            };
        }

        return initialValues;
    });
    const [userErrorMessage, setUserErrorMessage] = useState("");
    const { setAuthHandler } = useContext(AuthContext);

    const localStorageData = {
        username: formValues.username,
        email: formValues.email,
        avatar: formValues.avatar,
    };

    localStorage.setItem("form", JSON.stringify(localStorageData));

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
            const inputErrorMessage = inputValidations("Register", formValues);
            
            if (inputErrorMessage) {
                throw new Error(inputErrorMessage);
            }

            const user = await userService.register(formValues);

            localStorage.setItem("auth", JSON.stringify(user));
            setAuthHandler(user);
            navigate("/attractions");
        } catch (error) {      
            setFormValues(state => ({
                ...state,
                password: "",
                rePassword: "",
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
                        <h3 className="display-4 text-white text-uppercase">Register</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Register form
                        </h6>
                        <h1>Register So You Can Help Others</h1>
                    </div>
                    <div className="row justify-content-center" style={{ width: "750px", margin: "auto" }}>
                        <div className="col-lg-8">
                            <div className="contact-form bg-white" style={{ padding: 30 }}>
                                <div id="success" />

                                {userErrorMessage && <UserError message={userErrorMessage} />}

                                <form name="register" id="registerForm" onSubmit={onSubmitHandler}>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control p-4"
                                            id="username"
                                            placeholder="Name.."
                                            required="required"
                                            data-validation-required-message="Please enter a username"
                                            value={formValues.username}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
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
                                    <div className="control-group">
                                        <input
                                            type="password"
                                            name="rePassword"
                                            className="form-control p-4"
                                            id="rePassword"
                                            placeholder="Repeat Password.."
                                            required="required"
                                            data-validation-required-message="Please enter a repeat password"
                                            value={formValues.rePassword}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="avatar"
                                            className="form-control p-4"                                            
                                            id="avatar"
                                            placeholder="Avatar - http/https.."
                                            required="required"
                                            data-validation-required-message="Please enter an URL for your Avatar"
                                            value={formValues.avatar}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div className="text-center">
                                        <h6>* All fields are required</h6>
                                    </div>

                                    <div className="text-center">
                                        <button className={`btn btn-primary py-3 px-4 ${styles["buttons-margin"]}`}
                                            type="submit"
                                            id="registerButton"
                                            disabled={userErrorMessage ? true : false}
                                        >
                                            Register
                                        </button>
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${styles["buttons-margin"]}`}
                                            type="button"
                                            id="resetButton"
                                            onClick={resetFormHandler}
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