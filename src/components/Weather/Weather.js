import React, { useEffect, useState } from "react";
import "./Weather.css";
import Spinner from "../loaders/loader1/Spinner";
export default function Weather() {
  let [data, setData] = useState({
    location: {
      name: "Pimpri",
      region: "Maharashtra",
      country: "India",
      lat: 18.56,
      lon: 73.76,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1683627924,
      localtime: "2023-05-09 15:55",
    },
    current: {
      last_updated_epoch: 1683627300,
      last_updated: "2023-05-09 15:45",
      temp_c: 36.8,
      temp_f: 98.2,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
      wind_mph: 5.6,
      wind_kph: 9,
      wind_degree: 327,
      wind_dir: "NNW",
      pressure_mb: 1005,
      pressure_in: 29.69,
      precip_mm: 0,
      precip_in: 0,
      humidity: 28,
      cloud: 18,
      feelslike_c: 37.5,
      feelslike_f: 99.5,
      vis_km: 10,
      vis_miles: 6,
      uv: 9,
      gust_mph: 6.5,
      gust_kph: 10.4,
    },
  });
  const [place, setPlace] = useState();
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   load();
  // }, [place]);

  const load = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${place}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9e6f7d0457msh26b70af14d91b69p113522jsn81073d729168",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const res = await response.json();
      setLoading(true);
      // console.log(res);
      //console.log("name:" + res.location.name);
      setLoading(true);
      setData(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <div className="container weatherapp">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="container-fluid">
              <p className="navbar-brand">Get Real Time Weather Details</p>
            </div>
            <div className="d-flex">
              <input
                className="form-control me-2"
                id="inp"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setPlace(event.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                //onClick={load}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
        <div className="">
          <div className="card ">
            {loading && <Spinner />}

            {!loading && data.location ? (
              <div className="card-body d-flex flex-column align-items-center my-4">
                <div className="1" key={data.location.name}>
                  <h5 className="card-title text-center">
                    {data.location.name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {data.location.region},{data.location.country}
                  </h6>
                  <small className="text-center">
                    {data.location.localtime}
                  </small>
                </div>
                <div className="two container d-flex justify-content-around">
                  <div className="windDetails">
                    Temprature:
                    <br />
                    {data.current.temp_c}
                    <br />
                    WindSpeed :<br />
                    {data.current.vis_km} Km/h
                    <br />
                    Wind Direction:
                    <br />
                    {data.current.wind_dir}
                  </div>
                  <div className="image">
                    <img
                      className=""
                      src={data.current.condition.icon}
                      alt="weatherImage"
                    />
                    <p>Humidity:{data.current.humidity}%</p>
                  </div>
                  <div className="otherDetails">
                    Weather:
                    <p>
                      {data.current.condition.text}{" "}
                      {data.current.is_day == "1" ? "Day" : "Night"}{" "}
                    </p>
                    {/* <p>{data.current.cloud}</p> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-body text-center">
                {loading ? (
                  <h5>No records found</h5>
                ) : (
                  <h5>Search Your Nearest City</h5>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
