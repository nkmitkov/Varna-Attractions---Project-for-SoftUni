import { Link } from "react-router-dom";

export default function HomePageAttraction({
    image,
    name,
    _id
}) {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={ image } alt="" style={{ width: "600px", height: "280px" }}/>
                    <Link to={`/attractions/${_id}`} className="destination-overlay text-white text-decoration-none">
                        <h5 className="text-white" style={{ textAlign: "center" }} >{ name }</h5>
                    </Link>
                </div>
            </div>
        </>
    );
}