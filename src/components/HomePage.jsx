export default function HomePage() {
    return (
        <>
            
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/varna-home.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h1 className="display-3 text-white mb-md-4">
                                        Let's Discover Varna Together
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6
                            className="text-primary text-uppercase"
                            style={{ letterSpacing: 5 }}
                        >
                            Attractions
                        </h6>
                        <h1>Explore Top Attractions</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-1.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">United States</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-2.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">United Kingdom</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-3.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">Australia</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-4.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">India</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-5.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">South Africa</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="img/destination-6.jpg" alt="" />
                                <a
                                    className="destination-overlay text-white text-decoration-none"
                                    href=""
                                >
                                    <h5 className="text-white">Indonesia</h5>
                                    <span>100 Cities</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};