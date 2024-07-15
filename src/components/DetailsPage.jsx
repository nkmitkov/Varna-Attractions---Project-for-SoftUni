import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as attractionService from "../services/attractionService";

export default function DetailsPage() {
    const { id } = useParams();
    const [attraction, setAttraction] = useState({});

    useEffect(() => {
        attractionService.getOneById(id)
            .then(data => setAttraction(data))
            .catch(err => console.log(err));

        // todo: MAKE CATCH FUNCTIONALITY
    }, []);

    const onEditHandler = (e) => {
        console.log(`Edit - ${id}`)
        // I need to have state for the form with the inital state of the chosen attration
        // Has to be controlled form
    };
    
    const onDeleteHandler = (e) => {
        attractionService.remove(id)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 400 }} >
                        <h3 className="display-4 text-white text-uppercase">{attraction.name}</h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src={attraction.image} style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h1 className="mb-3">
                                    {attraction.name}
                                </h1>
                                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                                    <i className="fa fa-map-marker-alt text-primary mr-2" />
                                    {attraction.address}
                                </h6>
                                <p>
                                    {attraction.description} &nbsp;
                                    <a href={attraction.website} target="_blank">Read More...</a>
                                </p>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="m-0">
                                            <i className="fa fa-calendar-alt text-primary mr-2" />
                                            {attraction.hours}
                                        </h6>
                                        <h5 className="m-0">{attraction.phone}</h5>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <a href={attraction.website} target="_blank">
                                            <h6 className="m-0">Go to the website..</h6>
                                        </a>
                                        <h4 className="m-0">{Number(attraction.price) ? "BGN " : ""}{attraction.price}</h4>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-4">
                                    <div className="d-flex justify-content-between">
                                        <button onClick={onEditHandler}>Edit</button>
                                        <button onClick={onDeleteHandler}>Delete</button>
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