import { Routes, Route, Link } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./contexts/authContext";
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
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

function App() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AuthProvider>
            <Navigation />

            <Routes>
                <Route path={Path.Home} element={<HomePage />} />
                <Route path={Path.Catalog} element={<AttractionsPage />} />
                <Route path={Path.Details} element={<DetailsPage />} />
                <Route path={Path.About} element={<AboutVarnaPage />} />

                <Route element={<AuthGuard />}>
                    <Route path={Path.Create} element={<CreatePage />} />
                    <Route path={Path.Profile} element={<ProfilePage />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Route>

                <Route element={<GuestGuard />}>
                    <Route path={Path.Login} element={<LoginPage />} />
                    <Route path={Path.Register} element={<RegisterPage />} />
                </Route>

                <Route path="*" element={<WrongUrlPage />} />
            </Routes>

            <Footer />

            <Link onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </Link>
        </AuthProvider>
    );
};

export default App