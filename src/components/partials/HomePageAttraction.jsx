export default function HomePageAttraction(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={ props.data.image } alt="" />
                    <a className="destination-overlay text-white text-decoration-none" href="/" >
                        <h5 className="text-white" style={{ textAlign: "center" }} >{ props.data.name }</h5>
                        {/* <span>100 Cities</span> */}
                    </a>
                </div>
            </div>
        </>
    );
}