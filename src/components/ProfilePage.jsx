export default function ProfilePage() {
    return (
        <>

            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }} >
                        <h3 className="display-4 text-white text-uppercase">Profile</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Profile
                        </h6>
                        <h1>All About You</h1>
                    </div>
                    <div className="row">

                        <div className="col-lg-3 col-md-4 col-sm-6 pb-2" style={{ margin: "auto" }}>
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="img/profile-image.jpg" alt="" />
                                    <div className="team-social">
                                        <a className="btn btn-outline-primary btn-square" href="#twitter-link">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a className="btn btn-outline-primary btn-square" href="#facebook-link">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a className="btn btn-outline-primary btn-square" href="#instagram-link">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a className="btn btn-outline-primary btn-square" href="#linkedin-link">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Profile Name</h5>
                                    <p className="m-0">Profile Email</p>
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
                            Your Attractions
                        </h6>
                        <h1>Many users are thankful for your help</h1>
                    </div>
                    <div className="row pb-3">

                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
                                    {/* could be createdAt date */}
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a className="text-primary text-uppercase text-decoration-none" href="" >
                                            attractionName
                                        </a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">
                                        Attraction description
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-2.jpg" alt="" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a
                                            className="text-primary text-uppercase text-decoration-none"
                                            href=""
                                        >
                                            Admin
                                        </a>
                                        <span className="text-primary px-2">|</span>
                                        <a
                                            className="text-primary text-uppercase text-decoration-none"
                                            href=""
                                        >
                                            Tours &amp; Travel
                                        </a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">
                                        Dolor justo sea kasd lorem clita justo diam amet
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 pb-2">
                            <div className="blog-item">
                                <div className="position-relative">
                                    <img className="img-fluid w-100" src="img/blog-3.jpg" alt="" />
                                    <div className="blog-date">
                                        <h6 className="font-weight-bold mb-n1">01</h6>
                                        <small className="text-white text-uppercase">Jan</small>
                                    </div>
                                </div>
                                <div className="bg-white p-4">
                                    <div className="d-flex mb-2">
                                        <a
                                            className="text-primary text-uppercase text-decoration-none"
                                            href=""
                                        >
                                            Admin
                                        </a>
                                        <span className="text-primary px-2">|</span>
                                        <a
                                            className="text-primary text-uppercase text-decoration-none"
                                            href=""
                                        >
                                            Tours &amp; Travel
                                        </a>
                                    </div>
                                    <a className="h5 m-0 text-decoration-none" href="">
                                        Dolor justo sea kasd lorem clita justo diam amet
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}