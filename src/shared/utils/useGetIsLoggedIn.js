import { useSelector } from "react-redux";

const useGetIsLoggedIn = () => {
    const isLoggedIn =
        useSelector((state) => state.authReducer.token) || localStorage.token;

    if (isLoggedIn) {
        return true;
    } else {
        return false;
    }
};

export default useGetIsLoggedIn;
