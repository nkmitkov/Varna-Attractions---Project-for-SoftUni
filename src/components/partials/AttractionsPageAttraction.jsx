export default function AttractionsPageAttraction(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src={props.data.image} alt="{ props.data.name }" style={{ width: "500px", height: "250px" }}/>
                    <div className="p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                                <i className="fa fa-map-marker-alt text-primary mr-2" />
                                {props.data.address}
                            </small>
                            {/* <small className="m-0">
                                <i className="fa fa-calendar-alt text-primary mr-2" />3 days
                            </small>
                            <small className="m-0">
                                <i className="fa fa-user text-primary mr-2" />2 Person
                            </small> */}
                        </div>
                        <a className="h5 text-decoration-none" href={props.data.website}>
                            {props.data.name}
                        </a>
                        <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="m-0">
                                    <i className="fa fa-star text-primary mr-2" />
                                    
                                    4.5 <small>(250)</small>
                                </h6>
                                <h5 className="m-0">
                                    {Number(props.data.price) ? "BGN " : ""}{props.data.price}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}