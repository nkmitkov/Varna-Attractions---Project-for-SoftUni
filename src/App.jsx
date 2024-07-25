import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from "./contexts/authContext";
import Path from "./paths";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import AboutVarnaPage from "./components/AboutVarnaPage/AboutVarnaPage";
import AttractionsPage from "./components/AttractionsPage/AttractionsPage";
import CreatePage from "./components/CreatePage/CreatePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Logout from "./components/Logout";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import WrongUrlPage from "./components/404/404";
// import ErrorComponent from "./components/ErrorComponent/ErrorComponent";

function App() {
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem("accessToken");

        return {};
    });

    console.log(auth);

    const setAuthHandler = (user) => setAuth(user);

    const values = {
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            <Navigation />

            <Routes>
                <Route path={Path.Home} element={<HomePage />} />
                <Route path={Path.Catalog} element={<AttractionsPage />} />
                <Route path={Path.Create} element={<CreatePage />} />
                <Route path={Path.Details} element={<DetailsPage />} />
                <Route path={Path.About} element={<AboutVarnaPage />} />
                <Route path={Path.Profile} element={<ProfilePage />} />
                <Route path={Path.Login} element={<LoginPage setAuthHandler={setAuthHandler} />} />
                <Route path={Path.Register} element={<RegisterPage setAuthHandler={setAuthHandler} />} />
                <Route path={Path.Logout} element={<Logout setAuthHandler={setAuthHandler} />} />
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
