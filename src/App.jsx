import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from "./contexts/authContext";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import AttractionsPage from "./components/AttractionsPage/AttractionsPage";
import AboutVarnaPage from "./components/AboutVarnaPage/AboutVarnaPage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreatePage from "./components/CreatePage/CreatePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import WrongUrlPage from "./components/404/404";
import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
    const [errorMessage, setErrorMessage] = useState("");
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    const setAuthHandler = (user) => setAuth(user);

    //! After show error message i don't know how to hide the modal

    const setErrorHandler = (message) => {
        setErrorMessage(message);
    };

    const values = {
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            <Navigation />

            {errorMessage && <ErrorComponent msg={errorMessage} />}

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/attractions" element={<AttractionsPage setErrorHandler={setErrorHandler} />} />
                <Route path="/attractions/create" element={<CreatePage setErrorHandler={setErrorHandler} />} />
                <Route path="/attractions/:id" element={<DetailsPage />} />
                {/* <Route path="/attractions/:id/edit" element={<DetailsPage />} /> */}
                <Route path="/about" element={<AboutVarnaPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage setErrorHandler={setErrorHandler} setAuthHandler={setAuthHandler} />} />
                <Route path="/register" element={<RegisterPage setErrorHandler={setErrorHandler} />} />
                {/* <Route path="/contacts" element={<ContactsPage />}>Contact /s */}
                <Route path="*" element={<WrongUrlPage />} />
            </Routes>

            <Footer />

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </AuthContext.Provider>
    );
};

export default App
