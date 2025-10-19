import React, { useEffect } from "react";
import Home from "../../Home";
import Weather from "../../Weather/Weather";
import Card from "../../Sliders/Carousel";
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";
import User from "../../Users/User";
import "./navbar.css";
import { getAllUser } from "../../../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  // console.log("users data",state)
  useEffect(() => {
    //callin get users api
    dispatch(getAllUser());

    //settimout in useEffect
    // const timer = setTimeout(() => {
    //   console.log('This will run after 1 second!');
    //   dispatch(getAllUser())
    // }, 5000);
    // return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">Navbar</p>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse navTags" id="navbarNav">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/weather">
                    Weather
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    All Users-{state.loading ? "loading" : state.users.length}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newFeatures">
                    New Features
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <NavLink to="/logout" className="badge bg-primary">
                Logout
              </NavLink>
              {/* <button className="badge bg-primary" type="button" onClick={()=>{Navigate("/logout")}}>Logout</button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
