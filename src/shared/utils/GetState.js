import { useStore } from "react-redux";

export const GetState = () => {
    const store = useStore();
    const currentState = store.getState();
    return currentState;
};
