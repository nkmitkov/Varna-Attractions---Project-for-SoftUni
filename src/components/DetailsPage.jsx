export default function DetailsPage(props) {
    return (
        <>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }} >
                        {/* ABOUT DETAILS */}
                        <h3 className="display-4 text-white text-uppercase">{props.data.name}</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                {/* IMAGE ON THE LEFT SIDE */}
                                <img className="position-absolute w-100 h-100" src={props.data.image} style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h1 className="mb-3">
                                    {props.data.name}
                                </h1>
                                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                                    <i className="fa fa-map-marker-alt text-primary mr-2" />
                                    {props.data.address}
                                </h6>
                                <p>
                                    {props.data.description}&nbsp;
                                    <a href={props.data.website} target="_blank">Read More...</a>
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="m-0">
                                            <i className="fa fa-calendar-alt text-primary mr-2" />
                                            {props.data.hours}
                                        </h6>
                                        <h5 className="m-0">{props.data.phone}</h5>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <a href={props.data.website} target="_blank">
                                            <h6 className="m-0">Go to the website..</h6>
                                        </a>
                                        <h4 className="m-0">{Number(props.data.price) ? "BGN " : ""}{props.data.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};