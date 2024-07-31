import { Link } from "react-router-dom";
import "./AttractionsPageAttraction.module.css";

export default function AttractionsPageAttraction({
    _id,
    name,
    description,
    image,
    address,
    hours,
    phone,
    price,
    website,
}) {

    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src={image} alt={name} style={{ width: "500px", height: "250px" }} />
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                                <i className="fa fa-map-marker-alt text-primary mr-2" />
                                {address}
                            </small>
                        </div>
                        <Link className="h5 text-decoration-none" to={`/attractions/${_id}`} >
                            {name}
                        </Link>
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                                {description}
                            </small>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                                <a href={website} target="_blank">Go to the website..</a>
                            </small>

                            <h5 className="m-0">
                                {!!Number(price) ? "BGN " : ""}{price}
                            </h5>
                        </div>

                        <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="m-0">
                                    Hours<br /><small>{hours}</small>
                                </h6>
                                <h6 className="m-0">
                                    Phone<br /><small>{phone}</small>
                                </h6>
                            </div>
                        </div>

                        <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                            <Link to={`/attractions/${_id}`}><button>Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}