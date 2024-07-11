import { useState } from "react";
import * as attractionService from "../services/attractionService";

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

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        // Check if all fields are filled and valid

        try {
            const newAttraction = await attractionService.create(formValues);

            console.log(newAttraction);
            // Redirect to attractions page
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
                                <form name="sentMessage" id="createForm" onSubmit={onSubmitHandler}>

                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            required="required"
                                            data-validation-required-message="Please enter a name"
                                            value={formValues.name}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="image"
                                            name="image"
                                            placeholder="Image"
                                            required="required"
                                            data-validation-required-message="Please enter an image URL"
                                            value={formValues.image}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="address"
                                            name="address"
                                            placeholder="Address"
                                            required="required"
                                            data-validation-required-message="Please enter an address"
                                            value={formValues.address}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="hours"
                                            name="hours"
                                            placeholder="Operating hours"
                                            required="required"
                                            data-validation-required-message="Please enter operating hours"
                                            value={formValues.hours}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone"
                                            required="required"
                                            data-validation-required-message="Please enter phone number"
                                            value={formValues.phone}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="price"
                                            name="price"
                                            placeholder="Entrance fee"
                                            required="required"
                                            data-validation-required-message="Please enter an entrance fee"
                                            value={formValues.price}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="website"
                                            name="website"
                                            placeholder="Website"
                                            required="required"
                                            data-validation-required-message="Please enter a website"
                                            value={formValues.website}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control py-3 px-4"
                                            rows={5}
                                            id="description"
                                            name="description"
                                            placeholder="Description"
                                            required="required"
                                            data-validation-required-message="Please enter a description"
                                            value={formValues.description}
                                            onChange={onChangeHandler}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="createButton" >
                                            Create
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