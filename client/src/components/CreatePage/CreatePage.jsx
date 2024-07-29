import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as attractionService from "../../services/attractionService";
import styles from "./CreatePage.module.css";

const FORM_KEYS = {
    name: "name",
    image: "image",
    address: "address",
    hours: "hours",
    phone: "phone",
    price: "price",
    website: "website",
    description: "description",
};

const formInitialState = {
    [FORM_KEYS.name]: "",
    [FORM_KEYS.image]: "",
    [FORM_KEYS.address]: "",
    [FORM_KEYS.hours]: "",
    [FORM_KEYS.phone]: "",
    [FORM_KEYS.price]: "",
    [FORM_KEYS.website]: "",
    [FORM_KEYS.description]: "",
};

export default function CreatePage() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const onBlurValidationHandler = (e) => {
        const value = e.target.value;
        let message = "";

        switch (e.target.name) {
            case "name":
                value.length < 4 ? message = "Name must be at least 4 characters" : "";
                break;
            case "image":
                const imageRegExp = /^https?:\/\//;
                const imageMatch = value.match(imageRegExp);

                !imageMatch ? message = "Image must be a valid URL address" : "";
                break;
            case "address":
                value.length < 4 ? message = "Address must be at least 4 characters" : "";
                break;
            case "hours":
                value.length < 4 ? message = "Operating hours must be at least 4 characters" : "";
                break;
            case "phone":
                if (!Number(value) || value.length < 9) {
                    message = "Phone number must be valid. Use only numbers."
                }
                break;
            case "price":
                if (Number(value)) {
                    Number(value) < 0 ? message = "Price must be 'free' or a positive number" : "";
                } else {
                    value !== "free" ? message = "Price must be 'free' or a positive number" : "";
                }
                break;
            case "website":
                const websiteRegExp = /^https?:\/\//;
                const websiteMatch = value.match(websiteRegExp);

                !websiteMatch ? message = "Website must be a valid URL address" : "";
                break;
            case "description":
                if (value.length < 10 || value.length > 200) {
                    message = "Description must be between 10 and 200 characters";
                }
                break;
        }

        setErrors(state => ({
            ...state,
            [e.target.name]: message,
        }));
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            if (!formValues.name || !formValues.image || !formValues.address || !formValues.hours ||
                !formValues.phone || !formValues.price || !formValues.website || !formValues.description) {
                throw new Error("All input fields are required");
            }

            await attractionService.create(formValues);

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
                                <form name="create" id="createForm" onSubmit={onSubmitHandler}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${errors.name && styles["input-error"]}`}
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            required="required"
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
                                            className={`form-control p-4 ${errors.image && styles["input-error"]}`}
                                            id="image"
                                            name="image"
                                            placeholder="Image"
                                            required="required"
                                            value={formValues.image}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.image && (<p className={styles["error-message"]}>{errors.image}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${errors.address && styles["input-error"]}`}
                                            id="address"
                                            name="address"
                                            placeholder="Address"
                                            required="required"
                                            value={formValues.address}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.address && (<p className={styles["error-message"]}>{errors.address}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${errors.hours && styles["input-error"]}`}
                                            id="hours"
                                            name="hours"
                                            placeholder="Operating hours"
                                            required="required"
                                            value={formValues.hours}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.hours && (<p className={styles["error-message"]}>{errors.hours}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${errors.phone && styles["input-error"]}`}
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone number"
                                            required="required"
                                            value={formValues.phone}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger"></p>

                                        {errors.phone && (<p className={styles["error-message"]}>{errors.phone}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input 
                                            type="text" 
                                            className={`form-control p-4 ${errors.price && styles["input-error"]}`}
                                            id="price"
                                            name="price"
                                            placeholder="Entrance fee"
                                            required="required"
                                            value={formValues.price}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.price && (<p className={styles["error-message"]}>{errors.price}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className={`form-control p-4 ${errors.website && styles["input-error"]}`}
                                            id="website"
                                            name="website"
                                            placeholder="Website"
                                            required="required"
                                            value={formValues.website}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.website && (<p className={styles["error-message"]}>{errors.website}</p>)}

                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className={`form-control py-3 px-4 ${errors.description && styles["input-error"]}`}
                                            rows={5}
                                            id="description"
                                            name="description"
                                            placeholder="Short description"
                                            required="required"
                                            value={formValues.description}
                                            onChange={onChangeHandler}
                                            onBlur={onBlurValidationHandler}
                                        />
                                        <p className="help-block text-danger" />

                                        {errors.description && (<p className={styles["error-message"]}>{errors.description}</p>)}

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