import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/mainReducer";

const initialState = {};

const middleware = [thunk];

// const store = configureStore(
const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    // { devTools: process.env.NODE_ENV !== "production" }
);

export default store;
