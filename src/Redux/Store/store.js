import { createStore } from "redux";
import rootReducer from "../Reducers/index"
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../Sagas/mySaga";
const saga=createSagaMiddleware();
const store=configureStore({
    reducer:rootReducer,
     middleware:()=>[saga]
});
saga.run(rootSaga)
export default store;