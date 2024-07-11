import ProfilePageAttraction from "./partials/ProfilePageAttraction";
import attractions from "../../data.json";

export default function ProfilePage({
    _id,
    name,
    email,
    createdAt,
    avatar
}) {
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
                                    <img className="img-fluid w-100" src={ avatar } alt={ name } />
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
                                    <h5 className="text-truncate">{ name }</h5>
                                    <p className="m-0">{ email }</p>
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

                        <ProfilePageAttraction data={ attractions[1] } />
                        <ProfilePageAttraction data={ attractions[2] } />
                        <ProfilePageAttraction data={ attractions[3] } />

                    </div>
                </div>
            </div>

        </>
    );
}