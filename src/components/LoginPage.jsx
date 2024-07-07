import * as userService from "../services/userService";

export default function LoginPage() {

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const user = await userService.login(data);

            // send token and redirect
            console.log(user);
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
                                <form name="login" id="loginForm" noValidate="novalidate" onSubmit={onSubmitHandler}>
                                    
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control p-4"
                                            id="email"
                                            placeholder="Email"
                                            required="required"
                                            data-validation-required-message="Please enter an email"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control p-4"
                                            id="password"
                                            placeholder="Password"
                                            required="required"
                                            data-validation-required-message="Please enter a password"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="loginButton" >
                                            Login
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