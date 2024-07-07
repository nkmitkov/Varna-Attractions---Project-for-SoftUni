import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AttractionsPage from "./components/AttractionsPage";
import AboutVarnaPage from "./components/AboutVarnaPage";
import DetailsPage from "./components/DetailsPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import ProfilePage from "./components/ProfilePage";
import WrongUrlPage from "./components/404/404";


function App() {

    return (
        <>
            <Navigation />
            
            <AttractionsPage />
            
            <Footer />

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    );
};

export default App
