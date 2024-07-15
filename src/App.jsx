import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AttractionsPage from "./components/AttractionsPage";
import AboutVarnaPage from "./components/AboutVarnaPage";
import DetailsPage from "./components/DetailsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreatePage from "./components/CreatePage/CreatePage";
import EditPage from "./components/EditPage/EditPage";
import ProfilePage from "./components/ProfilePage";
import WrongUrlPage from "./components/404/404";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
    const [errorMessage, setErrorMessage] = useState("");

    const setErrorHandler = (message) => {
        setErrorMessage(message);
    };

    return (
        <>
            <Navigation />

            {errorMessage && <ErrorComponent msg={errorMessage} />}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/attractions" element={<AttractionsPage />} />
                <Route path="/attractions/create" element={<CreatePage />} />
                <Route path="/attractions/:id" element={<DetailsPage />} />
                <Route path="/about" element={<AboutVarnaPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage setErrorHandler={setErrorHandler} />} />
                <Route path="/register" element={<RegisterPage setErrorHandler={setErrorHandler} />} />
                {/* <Route path="/contacts" element={<ContactsPage />}>Contact /s */}
                <Route path="*" element={<WrongUrlPage />} />
            </Routes>

            {/* <EditPage setErrorHandler={setErrorHandler} id={"3d188930-2159-4145-84da-341279981f09"} /> */}
            {/* <ProfilePage data={users[0]} /> */}
            {/* <DetailsPage data={attractions[0]}/> */}

            <Footer />

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    );
};

export default App
