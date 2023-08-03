import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { MainPage } from "./components/MainPage";
import store from "./store/store";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/Auth/Register/RegisterPage";
import LoginPage from "./components/Auth/Login/LoginPage";
import AlertNotification from "./shared/components/AlertNotification";
import { useEffect } from "react";
import setAuthToken from "./shared/utils/setAuthToken";
import ScaledApp from "./ScaledApp";

const App = () => {
    // useEffect(() => {
    //     if (localStorage.token) {
    //         // console.log("found token in local storage");
    //         setAuthToken();

    //         <Navigate to="/home" />;
    //     }
    // }, []);

    return (
        <ScaledApp />
        // <>
        //     <Provider store={store}>
        //         <Router>
        //             <Routes>
        //                 <Route path="/" element={<WelcomePage />} />
        //                 <Route path="/welcome" element={<WelcomePage />} />
        //                 <Route path="/register" element={<RegisterPage />} />
        //                 <Route path="/login" element={<LoginPage />} />
        //                 <Route path="/home" element={<MainPage />} />
        //             </Routes>
        //         </Router>
        //         <AlertNotification />
        //     </Provider>
        // </>
    );
};

export default App;
