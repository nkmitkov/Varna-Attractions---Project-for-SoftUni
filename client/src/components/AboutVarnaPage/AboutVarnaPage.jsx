export default function AboutVarnaPage() {
    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/varna-seaport-and-lighthouse.jpg" alt="Image" style={{ maxHeight: "500px"}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h1 className="display-3 text-white mb-md-4">
                                        ABOUT VARNA
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="img/varna-about-3.jpg" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                                <h1 className="mb-3">
                                    Varna is the third-largest city in Bulgaria
                                </h1>
                                <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }} >
                                    Population: 335,177 (2017)
                                </h6>
                                <p>
                                    Varna (Bulgarian: Варна, pronounced ['varnɐ]) is the largest city and seaside resort on the Bulgarian Black Sea Coast and in the Northern Bulgaria region. Situated strategically in the Gulf of Varna, the city has been a major economic, social and cultural centre for almost three millennia. Historically known as Odessos (Ancient Greek: Ὀδησσός), Varna developed from a Thracian seaside settlement to a major seaport on the Black Sea.&nbsp;
                                    <a href="https://en.wikipedia.org/wiki/Varna,_Bulgaria" target="_blank">Read More...</a>
                                </p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src="img/varna-about-1.jpg" alt="" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid" src="img/varna-about-2.jpg" alt="" />
                                    </div>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186126.57799405605!2d27.64755366412188!3d43.204711548307515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538baaf3d7a1%3A0x5727941c71a58b7c!2sVarna!5e0!3m2!1sen!2sbg!4v1722776272300!5m2!1sen!2sbg"
                                    width="400"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};