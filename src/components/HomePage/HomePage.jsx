import { useState, useEffect } from "react";

import HomePageAttraction from "./HomePageAttraction";
import * as attractionService from "../../services/attractionService";

export default function HomePage() {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        attractionService.getLatestThree()
            .then(data => setAttractions(data))
            .catch(err => console.log(err));
            
            // todo: DO THE CATCH FUNCTIONALITY
    }, []);

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
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                            Latest Attractions
                        </h6>
                        <h1>Latest Attractions</h1>
                    </div>
                    <div className="row">

                        {attractions.map(attr => (<HomePageAttraction key={attr._id} {...attr} />))}

                    </div>
                </div>
            </div>

        </>
    );
};