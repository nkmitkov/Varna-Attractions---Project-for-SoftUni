import { useState, useEffect } from "react";

import AttractionsPageAttraction from "./AttractionsPageAttraction";
import * as attractionService from "../../services/attractionService";

export default function AttractionsPage() {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        attractionService.getAll()
            .then((result) => setAttractions(result))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <>

            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/varna-attractions.jpg" alt="Image" style={{ maxHeight: "500px"}} />
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
                            All Attractions
                        </h6>
                        <h1>Explore Top Attractions In Varna</h1>
                    </div>
                    <div className="row">

                        {attractions.map(attr => (
                            <AttractionsPageAttraction
                                key={attr._id}
                                {...attr}
                            />
                        ))}

                    </div>
                </div>
            </div>

        </>
    );
};