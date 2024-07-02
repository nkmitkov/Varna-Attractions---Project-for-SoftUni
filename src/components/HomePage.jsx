import HomePageAttraction from "./partials/HomePageAttraction";
import attractions from "../../data.json";

export default function HomePage() {
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
                            Attractions
                        </h6>
                        <h1>Explore Top Attractions</h1>
                    </div>
                    <div className="row">
                        <HomePageAttraction data={ attractions[0] } />
                        <HomePageAttraction data={ attractions[1] } />
                        <HomePageAttraction data={ attractions[2] } />
                        <HomePageAttraction data={ attractions[3] } />
                        <HomePageAttraction data={ attractions[4] } />
                    </div>
                </div>
            </div>

        </>
    );
};