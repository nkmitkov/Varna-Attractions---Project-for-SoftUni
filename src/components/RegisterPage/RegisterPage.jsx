import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./RegisterPage.module.css";
import * as userService from "../../services/userService";
import { useForm } from "../../hooks/useForm";

const FORM_KEYS = {
    username: "username",
    email: "email",
    password: "password",
    rePassword: "rePassword",
    avatar: "avatar",
};

export default function RegisterPage({
    setAuthHandler
}) {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = async (values) => {
        try {
            if (!values.username || !values.email || !values.password || values.password !== values.rePassword || !formValues.avatar) {
                throw new Error("All input fields are required");
            }

            delete values.rePassword;

            const info = await userService.register(values);

            setAuthHandler(info);
            localStorage.setItem("accessToken", info.accessToken);
            navigate("/attractions");
        } catch (error) {
            console.log(error);
        }
    };

    const {
        formValues,
        onChangeHandler,
        onSubmit,
        resetFormHandler
    } = useForm({
        [FORM_KEYS.username]: "",
        [FORM_KEYS.email]: "",
        [FORM_KEYS.password]: "",
        [FORM_KEYS.rePassword]: "",
        [FORM_KEYS.avatar]: "",
    }, onSubmitHandler);

    const onBlurValidationHandler = (e) => {
        let message = "";

        switch (e.target.name) {
            case "username":
                formValues.username.length < 2 ? message = "Name must be at least 2 characters" : "";
                break;
            case "email":
                const emailRegExp = /\w+@\w+\.\w+/;
                const emailMatch = formValues.email.match(emailRegExp);

                !emailMatch ? message = "Email must be valid" : "";
                break;
            case "password":
                formValues.password.length < 2 ? message = "Password must be at least 2 characters" : "";
                break;
            case "rePassword":
                formValues.rePassword !== formValues.password ? message = "Both passwords must match" : "";
                break;
            case "avatar":
                const avatarRegExp = /^https?:\/\//;
                const avatarMatch = formValues.avatar.match(avatarRegExp);

                !avatarMatch ? message = "Avatar must be a valid URL" : "";
                break;
        }

        setErrors(state => ({
            ...state,
            [e.target.name]: message,
        }));
    }

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
                                <form name="register" id="registerForm" onSubmit={onSubmit}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="username"
                                            className={
                                                `form-control p-4 
                                                ${errors.username && styles["input-error"]}`
                                            }
                                            id="username"
                                            placeholder="Name"
                                            required="required"
                                            data-validation-required-message="Please enter a username"
                                            value={formValues.username}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.username && (<p className={styles["error-message"]}>{errors.username}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="email"
                                            className={
                                                `form-control p-4 
                                                ${errors.email && styles["input-error"]}`
                                            }
                                            id="email"
                                            placeholder="Email"
                                            required="required"
                                            data-validation-required-message="Please enter an email"
                                            value={formValues.email}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.email && <p className={styles["error-message"]}>{errors.email}</p>}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className={
                                                `form-control p-4 
                                                ${errors.password && styles["input-error"]}`
                                            }
                                            id="password"
                                            placeholder="Password"
                                            required="required"
                                            data-validation-required-message="Please enter a password"
                                            value={formValues.password}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.password && <p className={styles["error-message"]}>{errors.password}</p>}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="password"
                                            name="rePassword"
                                            className={
                                                `form-control p-4 
                                                ${errors.rePassword && styles["input-error"]}`
                                            }
                                            id="rePassword"
                                            placeholder="Repeat Password"
                                            required="required"
                                            data-validation-required-message="Please enter a repeat password"
                                            value={formValues.rePassword}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.rePassword && <p className={styles["error-message"]}>{errors.rePassword}</p>}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="avatar"
                                            className={
                                                `form-control p-4 
                                                ${errors.avatar && styles["input-error"]}`
                                            }
                                            id="avatar"
                                            placeholder="Avatar - http/https"
                                            required="required"
                                            data-validation-required-message="Please enter an URL for your Avatar"
                                            value={formValues.avatar}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.avatar && <p className={styles["error-message"]}>{errors.avatar}</p>}

                                    </div>

                                    <div className="text-center">
                                        <button className={`btn btn-primary py-3 px-4 ${true && styles["buttons-margin"]}`}
                                            type="submit"
                                            id="registerButton"
                                            disabled={Object.values(errors).some(x => x)}
                                        >
                                            Register
                                        </button>
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${true && styles["buttons-margin"]}`}
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