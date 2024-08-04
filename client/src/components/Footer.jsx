export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: 30 }} >
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
                            <a className="text-white-50 mb-2" href="#hotels-link">
                                <i className="fa fa-angle-right mr-2" />
                                Hotels links
                            </a>
                            <a className="text-white-50 mb-2" href="#restaurants-link">
                                <i className="fa fa-angle-right mr-2" />
                                Restaurants links
                            </a>
                            <a className="text-white-50 mb-2" href="#museums-link">
                                <i className="fa fa-angle-right mr-2" />
                                Museums links
                            </a>
                            <a className="text-white-50 mb-2" href="#buses-link">
                                <i className="fa fa-angle-right mr-2" />
                                Buses links
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
        </>
    );
}