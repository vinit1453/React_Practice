import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import store from "./Redux/Store/store";
import i18nInitializer from "./Internationalization/i18n";
import { I18nextProvider } from "react-i18next";
import Spinner from "./components/loaders/loader1/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <I18nextProvider i18n={i18nInitializer} defaultNS={"translation"}>
        {/* Giving access to the Store for entire application */}
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
