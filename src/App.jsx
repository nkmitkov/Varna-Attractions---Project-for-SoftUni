import HomePage from "./components/HomePage";
import AttractionsPage from "./components/AttractionsPage";
import AboutVarnaPage from "./components/AboutVarnaPage";
import DetailsPage from "./components/DetailsPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
// import CreatePage from "./components/CreatePage";
// import EditPage from "./components/EditPage";
import ProfilePage from "./components/ProfilePage";
import WrongUrlPage from "./components/404";

function App() {
    return (
        <>
            <div className="container-fluid bg-light pt-3 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <p>
                                    <i className="fa fa-envelope mr-2" />
                                    mail@domain.com
                                </p>
                                <p className="text-body px-3">|</p>
                                <p>
                                    <i className="fa fa-phone-alt mr-2" />
                                    +359 888 888888
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-primary px-3" href="#facebook-link">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-primary px-3" href="#twitter-link">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-primary px-3" href="#linkedin-link">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-primary px-3" href="#instagram-link">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="text-primary pl-3" href="#youtube-link">
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid position-relative nav-bar p-0">
                <div
                    className="container-lg position-relative p-0 px-lg-3"
                    style={{ zIndex: 9 }}
                >
                    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" className="navbar-brand">
                            <h1 className="m-0 text-primary">
                                <span className="text-dark">VARNA </span>ATTRACTIONS
                            </h1>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between px-3"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav ml-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">
                                    Home
                                </a>
                                <a href="service.html" className="nav-item nav-link">
                                    Attractions
                                </a>
                                <a href="about.html" className="nav-item nav-link">
                                    About Varna
                                </a>
                                <a href="package.html" className="nav-item nav-link">
                                    Login
                                </a>
                                <a href="contact.html" className="nav-item nav-link">
                                    Register
                                </a>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contacts
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            
            <ProfilePage />
            

            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: 90 }} >
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <a href="" className="navbar-brand">
                            <h1 className="text-primary">
                                <span className="text-white">VARNA </span>
                                <p>ATTRACTIONS</p>
                            </h1>
                        </a>
                        <p>
                            The best Varna attractions in one place
                        </p>
                        <h6
                            className="text-white text-uppercase mt-4 mb-3"
                            style={{ letterSpacing: 5 }}
                        >
                            Follow Us
                        </h6>
                        <div className="d-flex justify-content-start">
                            <a className="btn btn-outline-primary btn-square mr-2" href="#twitter-link">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#facebook-link">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-primary btn-square mr-2" href="#linkedin-link">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="btn btn-outline-primary btn-square" href="#instagram-link">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: 5 }} >
                            Usefull Links
                        </h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white-50 mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Hotels links
                            </a>
                            <a className="text-white-50 mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Restaurants links
                            </a>
                            <a className="text-white-50 mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Museums links
                            </a>
                            <a className="text-white-50 mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Buses links
                            </a>
                            <a className="text-white-50 mb-2" href="#">
                                <i className="fa fa-angle-right mr-2" />
                                Other links
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5
                            className="text-white text-uppercase mb-4"
                            style={{ letterSpacing: 5 }}
                        >
                            Contact Us
                        </h5>
                        <p>
                            <i className="fa fa-map-marker-alt mr-2" />
                            123 Varna Street, Varna, Bulgaria
                        </p>
                        <p>
                            <i className="fa fa-phone-alt mr-2" />
                            +359 888 888888
                        </p>
                        <p>
                            <i className="fa fa-envelope mr-2" />
                            mail@domain.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white-50">
                            Copyright © <a href="#">Domain</a>. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <p className="m-0 text-white-50">
                            Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                </div>
            </div>


            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    );
};

export default App
