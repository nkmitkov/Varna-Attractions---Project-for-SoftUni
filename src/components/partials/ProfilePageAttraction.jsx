export default function ProfilePageAttraction(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                <div className="blog-item" >
                    <div className="position-relative">
                        <img className="img-fluid w-100" src={props.data.image} alt={props.data.name} style={{ width: "500px", height: "230px" }} />
                        {/* could be createdAt date */}
                        <div className="blog-date">
                            <h6 className="font-weight-bold mb-n1">Jan</h6>
                            <small className="text-white text-uppercase">2024</small>
                        </div>
                    </div>
                    <div className="bg-white p-4">
                        <div className="d-flex mb-2">
                            <a className="text-primary text-uppercase text-decoration-none" href="/" >
                                {props.data.name}
                            </a>
                        </div>
                        <a className="h5 m-0 text-decoration-none" href="/" >
                            {props.data.description}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}