import { useState } from "react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AttractionsPage from "./components/AttractionsPage";
import AboutVarnaPage from "./components/AboutVarnaPage";
import DetailsPage from "./components/DetailsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import ProfilePage from "./components/ProfilePage";
import WrongUrlPage from "./components/404/404";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

// import attractions from "../data.json";

function App() {
    const [error, setError] = useState("");

    const setErrorHandler = (message) => {
        setError(message);
    };

    return (
        <>
            <Navigation />

            {error && <ErrorComponent msg={error} />}
            
            {/* <DetailsPage data={attractions[0]}/> */}
            <LoginPage setErrorHandler={setErrorHandler} />

            <Footer />

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    );
};

export default App
