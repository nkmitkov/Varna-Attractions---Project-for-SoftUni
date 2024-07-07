// import "./css/font-awesome.min.css";
import "./css/style.css";

export default function WrongUrlPage() {
    return (
        <div id="notfound">
            <div className="notfound-bg"></div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2 style={{ color: "#212121" }}>Oops! Page Not Found</h2>
                <a href="/"><h2 style={{ color: "#7AB730" }}>Back To Homepage</h2></a>
            </div>
        </div>
    );
}