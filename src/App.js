import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar1/Navbar";
import Login from "./components/Form/FormikwithYup/Login";
import Home from "./components/Home";
import Weather from "./components/Weather/Weather";
import Carousel from "./components/Sliders/Carousel";
import FolderComponent from "./components/pages/FolderComponent/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import User from "./components/Users/User";
import FilesComponent from "./components/pages/FilesComponent";
import NotifcationsComponent from "./components/notifications/index";
import NotifcationsComponent2 from "./components/notifications2/index";
import ResizeObserverExample from "./concepts/observerApi/resizeObserver";
import MutationObserverExample from "./concepts/observerApi/mutationObserver";
function App() {
  return (
    <>
      <div className="container">
        {/* passing properties as attrinute to a component */}

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route
              exact
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            ></Route>
            <Route path="*" element={<Login />}></Route>
            <Route
              path="/weather"
              element={
                <>
                  <Navbar />
                  <Weather />
                </>
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <>
                  <Navbar />
                  <Carousel />
                </>
              }
            ></Route>
            <Route
              path="/users"
              element={
                <>
                  <Navbar />
                  <User />
                </>
              }
            ></Route>
            <Route
              path="/details"
              element={
                <>
                  <FolderComponent />
                </>
              }
            ></Route>
            <Route
              path="/files"
              element={
                <>
                  <FilesComponent />
                </>
              }
            ></Route>
            <Route
              path="/notify"
              element={
                <>
                  <NotifcationsComponent />
                </>
              }
            ></Route>
            <Route
              path="/notify2"
              element={
                <>
                  <NotifcationsComponent2 />
                </>
              }
            ></Route>
            <Route
              path="/dummy"
              element={
                <>
                  {/* <IntersectionObserverExample /> */}
                  {/* <ResizeObserverExample /> */}
                  <MutationObserverExample />
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <SecondClass name="SecondClassComponents"/> */}
      </div>
    </>
  );
}

export default App;
