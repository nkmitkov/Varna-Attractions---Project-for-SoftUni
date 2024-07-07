import * as attractionService from "../services/attractionService";

export default function CreatePage() {
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // Check if all fields are filled and valid

        try {
            const newAttraction = await attractionService.create(data);

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
                                <form name="sentMessage" id="createForm" noValidate="novalidate" onSubmit={onSubmitHandler}>

                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="name" name="name" placeholder="Name" required="required" data-validation-required-message="Please enter a name" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="image" name="image" placeholder="Image" required="required" data-validation-required-message="Please enter an image URL" />
                                        <p className="help-block text-danger" />
                                    </div>                                    
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="address" name="address" placeholder="Address" required="required" data-validation-required-message="Please enter an address" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="hours" name="hours" placeholder="Operating hours" required="required" data-validation-required-message="Please enter operating hours" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="phone" name="phone" placeholder="Phone" required="required" data-validation-required-message="Please enter phone number" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="price" name="price" placeholder="Entrance fee" required="required" data-validation-required-message="Please enter an entrance fee" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="website" name="website" placeholder="Website" required="required" data-validation-required-message="Please enter a website" />
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
                                            defaultValue={""}
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