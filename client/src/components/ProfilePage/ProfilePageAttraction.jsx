import { Link } from "react-router-dom";
import { dateConverter } from "../../utils/dateUtil";

export default function ProfilePageAttraction({
    description,
    image,
    name,
    _createdOn,
    _id,
}) {
    const date = dateConverter(_createdOn);

    return (
        <div className="col-lg-4 col-md-6 mb-4 pb-2">
            <div className="blog-item" >
                <div className="position-relative">
                    <Link to={`/attractions/${_id}`}>
                        <img className="img-fluid w-100" src={image} alt={name} style={{ width: "500px", height: "230px" }} />
                    </Link>
                    <div className="blog-date">
                        <h6 className="font-weight-bold mb-n1">{date.month}</h6>
                        <small className="text-white text-uppercase">{date.year}</small>
                    </div>
                </div>
                <div className="bg-white p-4">
                    <div className="d-flex mb-2">
                        <Link to={`/attractions/${_id}`}>
                            <p className="text-primary text-uppercase text-decoration-none">
                                {name}
                            </p>
                        </Link>
                    </div>
                    <p className="h5 m-0 text-decoration-none">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}