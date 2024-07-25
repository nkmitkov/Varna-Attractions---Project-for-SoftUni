import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as userService from "../../services/userService";
import styles from "./RegisterPage.module.css";

const FORM_KEYS = {
    name: "name",
    email: "email",
    password: "password",
    rePassword: "rePassword",
    avatar: "avatar",
};

const formInitialState = {
    [FORM_KEYS.name]: "",
    [FORM_KEYS.email]: "",
    [FORM_KEYS.password]: "",
    [FORM_KEYS.rePassword]: "",
    [FORM_KEYS.avatar]: "",
}

export default function RegisterPage() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onBlurValidationHandler = (e) => {
        let message = "";

        switch (e.target.name) {
            case "name":
                formValues.name.length < 2 ? message = "Name must be at least 2 characters" : "";
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

    const resetFormHandler = (error) => {
        // code 409 is when the email is already taken
        if (error?.code === 409) {
            setFormValues(state => ({
                ...state,
                ["password"]: "",
                ["rePassword"]: "",
            }))

            setErrors(state => ({
                ...state,
                ["email"]: "Email already exists"
            }));

            return;
        }

        setFormValues(formInitialState)
        setErrors({});
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        // todo: if some value is falty i must do something
        // Validate if user with the current email already exists
        // Remove rePassword property so we don't save it in the server
        const data = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            avatar: formValues.avatar,
        }

        try {
            if (!formValues.name || !formValues.email || !formValues.password || formValues.password !== formValues.rePassword || !formValues.avatar) {
                throw new Error("All input fields are required");
            }

            const info = await userService.register(data);

            if (info?.code === 409) {
                resetFormHandler(info);
                throw new Error(info.message);
            }

            localStorage.setItem("accessToken", info.accessToken);
            resetFormHandler();
            navigate("/attractions");
        } catch (error) {
            console.log(error);
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
                                <form name="register" id="registerForm" onSubmit={onSubmitHandler}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className={
                                                `form-control p-4 
                                                ${errors.name && styles["input-error"]}`
                                            }
                                            id="name"
                                            placeholder="Name"
                                            required="required"
                                            data-validation-required-message="Please enter a name"
                                            value={formValues.name}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.name && (<p className={styles["error-message"]}>{errors.name}</p>)}

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