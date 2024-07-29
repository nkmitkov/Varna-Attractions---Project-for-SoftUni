import { useContext, useState } from "react";

import { useForm } from "../../hooks/useForm";
import * as userService from "../../services/userService";
import styles from "./LoginPage.module.css";
import AuthContext from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const FORM_KEYS = {
    email: "email",
    password: "password",
};

export default function LoginPage() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const { setAuthHandler } = useContext(AuthContext);

    const onSubmitHandler = async (values) => {

        try {
            if (!values.email || !values.password) {
                throw new Error("Both input fields are required");
            }

            const user = await userService.login(values);

            localStorage.setItem("auth", JSON.stringify(user));
            setAuthHandler(user);
            navigate("/attractions");
        } catch (error) {
            console.log(error);
        }
    };

    const {
        formValues,
        onChangeHandler,
        resetFormHandler,
        onSubmit,
    } = useForm({
        [FORM_KEYS.email]: "",
        [FORM_KEYS.password]: "",
    }, onSubmitHandler);

    const onBlurValidationHandler = (e) => {
        const inputName = e.target.name;
        let message = "";

        if (inputName === "email") {
            const emailRegExp = /\w+@\w+\.\w+/;
            const emailMatch = formValues.email.match(emailRegExp);

            !emailMatch ? message = "Email must be valid" : "";
        } else if (inputName === "password") {
            formValues.password.length < 2 ? message = "Password must be at least 2 characters" : "";
        }

        setErrors(state => ({
            ...state,
            [inputName]: message,
        }));
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
                                <form name="login" id="loginForm" noValidate="novalidate" onSubmit={onSubmit}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="email"
                                            className={`form-control p-4 ${errors.email && styles["input-error"]}`}
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
                                            className={`form-control p-4 ${errors.password && styles["input-error"]}`}
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

                                    <div className="text-center">
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${true && styles["buttons-margin"]}`}
                                            type="submit"
                                            id="loginButton"
                                        >
                                            Login
                                        </button>
                                        <button
                                            className={`btn btn-primary py-3 px-4 ${true && styles["buttons-margin"]}`}
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