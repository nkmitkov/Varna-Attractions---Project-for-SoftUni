import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as attractionService from "../../services/attractionService";
import styles from "./CreatePage.module.css";
import inputValidations from "../../utils/inputValidations";
import UserError from "../UserError/UserError";

const initialValues = {
    name: "",
    image: "",
    address: "",
    hours: "",
    phone: "",
    price: "",
    website: "",
    description: "",
};

export default function CreatePage() {
    const [formValues, setFormValues] = useState(() => {
        const storedFormValues = JSON.parse(localStorage.getItem("form"));

        if (storedFormValues) {
            return storedFormValues;
        }

        return initialValues;
    });
    const [userErrorMessage, setUserErrorMessage] = useState("");
    const [inputError, setInputError] = useState("");
    const navigate = useNavigate();

    localStorage.setItem("form", JSON.stringify(formValues));

    useEffect(() => {
        return () => {
            localStorage.removeItem("form");
            setUserErrorMessage("");
            setInputError("");
        };
    }, []);

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const resetFormHandler = () => {
        setFormValues(initialValues);
        localStorage.removeItem("form");
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const {inputErrorMessage, inputName} = inputValidations("Create", formValues)

            if (inputErrorMessage) {
                setInputError(inputName);
                throw new Error(inputErrorMessage);
            };

            await attractionService.create(formValues);

            resetFormHandler();
            navigate("/attractions");
        } catch (error) {
            setUserErrorMessage(error.message);

            setTimeout(() => { setUserErrorMessage(""); }, 3000);
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
                        <h3 className="display-4 text-white text-uppercase">Create an Attraction</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Create
                        </h6>
                        <h1>Create Your Own Attraction</h1>
                    </div>
                    <div className="row justify-content-center" style={{ width: "800px", margin: "auto", }}>
                        <div className="col-lg-8">
                            <div className="contact-form bg-white" style={{ padding: 30 }}>
                                <div id="success" />

                                {userErrorMessage && <UserError message={userErrorMessage} />}

                                <form name="create" id="createForm" onSubmit={onSubmitHandler}>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "name" ? styles["input-error"] : ""}`}
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            required="required"
                                            value={formValues.name}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "image" ? styles["input-error"] : ""}`}
                                            id="image"
                                            name="image"
                                            placeholder="Image"
                                            required="required"
                                            value={formValues.image}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "address" ? styles["input-error"] : ""}`}
                                            id="address"
                                            name="address"
                                            placeholder="Address"
                                            required="required"
                                            value={formValues.address}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "hours" ? styles["input-error"] : ""}`}
                                            id="hours"
                                            name="hours"
                                            placeholder="Operating hours"
                                            required="required"
                                            value={formValues.hours}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "phone" ? styles["input-error"] : ""}`}
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone number"
                                            required="required"
                                            value={formValues.phone}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "price" ? styles["input-error"] : ""}`}
                                            id="price"
                                            name="price"
                                            placeholder="Entrance fee"
                                            required="required"
                                            value={formValues.price}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${inputError === "website" ? styles["input-error"] : ""}`}
                                            id="website"
                                            name="website"
                                            placeholder="Website"
                                            required="required"
                                            value={formValues.website}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className={`form-control py-3 px-4 ${inputError === "description" ? styles["input-error"] : ""}`}
                                            rows={5}
                                            id="description"
                                            name="description"
                                            placeholder="Short description"
                                            required="required"
                                            value={formValues.description}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div className="text-center">
                                        <h6>* All fields are required</h6>
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="createButton" >
                                            Create
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
}