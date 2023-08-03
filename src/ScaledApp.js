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
import { useEffect, useState } from "react";
import setAuthToken from "./shared/utils/setAuthToken";

const ScaledApp = () => {
    const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1000);
    const [isPortrait, setIsPortrait] = useState(
        window.innerHeight > window.innerWidth
    );

    useEffect(() => {
        const handleOrientationChange = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        window.addEventListener("resize", handleOrientationChange);

        // if (window.innerWidth > 1000) {
        //     setIsLaptop(true);
        //     console.log("isLaptop", isLaptop);
        // } else {
        //     console.log("isLaptop", isLaptop);
        //     setIsLaptop(false);
        //     if (!isPortrait) {
        //     }
        // }

        //
        setIsLaptop(window.innerWidth > 1000);
        setIsPortrait(window.innerWidth < window.innerHeight);

        if (localStorage.token) {
            setAuthToken();
            <Navigate to="/home" />;
        }
        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, [isLaptop, isPortrait]);
    console.log("isLaptop", isLaptop);
    console.log("isPortrait", isPortrait);

    return (
        <>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <WelcomePage
                                    isLaptop={isLaptop}
                                    isPortrait={isPortrait}
                                />
                            }
                        />
                        <Route
                            path="/welcome"
                            element={
                                <WelcomePage
                                    isLaptop={isLaptop}
                                    isPortrait={isPortrait}
                                />
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <RegisterPage
                                    isLaptop={isLaptop}
                                    isPortrait={isPortrait}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <LoginPage
                                    isLaptop={isLaptop}
                                    isPortrait={isPortrait}
                                />
                            }
                        />
                        <Route
                            path="/home"
                            element={
                                <MainPage
                                    isLaptop={isLaptop}
                                    isPortrait={isPortrait}
                                />
                            }
                        />
                    </Routes>
                </Router>
                <AlertNotification />
            </Provider>
        </>
    );
};

export default ScaledApp;
