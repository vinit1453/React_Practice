import React, { useState, useRef, useEffect } from "react";
import "./Carousel.css";
// Import Swiper React components

// register Swiper custom elements
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import {
  EffectCoverflow,
  Autoplay,
  Keyboard,
  Pagination,
  Navigation,
} from "swiper";
// Import Swiper styles

export default function Carousel() {
  const [data, setData] = useState({
    football: [
      {
        stadium: "Juventus Fc",
        country: "Italy",
        region: "",
        tournament: "UEFA Europa League Semi-Final",
        start: "2023-05-11 20:00",
        match: "Juventus vs Sevilla",
      },
      {
        stadium: "Roma",
        country: "Italy",
        region: "",
        tournament: "UEFA Europa League Semi-Final",
        start: "2023-05-11 20:00",
        match: "Roma vs Bayer Leverkusen",
      },
      {
        stadium: "Piast Gliwice",
        country: "Poland",
        region: "",
        tournament: "Polish Ekstraklasa",
        start: "2023-05-12 17:00",
        match: "Piast Gliwice vs Korona Kielce",
      },
      {
        stadium: "Ob Odense",
        country: "Denmark",
        region: "",
        tournament: "Danish Superliga",
        start: "2023-05-12 18:00",
        match: "OB Odense vs Aalborg BK",
      },
      {
        stadium: "Odd Grenland",
        country: "Norway",
        region: "",
        tournament: "Norwegian Eliteserien",
        start: "2023-05-12 18:00",
        match: "Odd Grenland vs Lillestrom",
      },
      {
        stadium: "Fc Twente",
        country: "Netherlands",
        region: "",
        tournament: "Dutch Eredivisie",
        start: "2023-05-12 19:00",
        match: "FC Twente vs NEC Nijmegen",
      },
      {
        stadium: "Rheinenergiestadion, Cologne",
        country: "Germany",
        region: "",
        tournament: "German Bundesliga",
        start: "2023-05-12 19:30",
        match: "Cologne vs Hertha Berlin",
      },
      {
        stadium: "Legia Warszawa",
        country: "Poland",
        region: "",
        tournament: "Polish Ekstraklasa",
        start: "2023-05-12 19:30",
        match: "Legia Warsaw vs Jagiellonia Bialystok",
      },
      {
        stadium: "Queens Park Fc, National Stadium",
        country: "United Kingdom",
        region: "",
        tournament: "Scottish Premiership",
        start: "2023-05-12 19:45",
        match: "Queen's Park vs Partick Thistle",
      },
      {
        stadium: "Clyde Fc",
        country: "United Kingdom",
        region: "",
        tournament: "Scottish League One",
        start: "2023-05-12 19:45",
        match: "Clyde vs East Fife",
      },
    ],
    cricket: [
      {
        stadium: "M.A. Chidambaram Stadium,Chepauk,Chennai",
        country: "India",
        region: "",
        tournament: "IPL 2023",
        start: "2023-05-10 15:00",
        match: "Chennai Super Kings vs Delhi Capitals",
      },
      {
        stadium: "D.Y Patil,Mumbai",
        country: "India",
        region: "",
        tournament: "IPL 2023",
        start: "2023-05-11 19:00",
        match: "Kings XI Punjab vs Mumbai Indians",
      },
    ],
    golf: [],
  });
  // useEffect(() => {
  //   load();
  // }, []);

  //   const load = async () => {
  //     const url = 'https://weatherapi-com.p.rapidapi.com/sports.json?q=London';
  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': '9e6f7d0457msh26b70af14d91b69p113522jsn81073d729168',
  // 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  // 	}
  // };

  //     try {
  //       const response = await fetch(url, options);
  //       const res = await response.json();
  //       console.log(res);
  //       setData(res);
  //       //  res.result.forEach(element => {
  //       // //     let result=`<div><p>${element.hotel_name}</p></div>`;
  //       // //    $('.a').append(result+'<br>');
  //       //  setData({name:element.hotel_name});

  //       //  });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <>
      {/* {Object.keys(data).map((key) => (
        <div className="container">
          <h1>{key}</h1>
          <br />
          <div className="container  bg-warning ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner d-flex ">
                {data[key].map((ele) => (
                  <div className="bg-danger">
                    <h1>{ele.tournament}</h1>
                    <p>{ele.match}</p>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      ))}  */}
      {/* {Object.keys(data).map((key) => (
               <div className="swiper">
                   <h1>{key}</h1>
              <div className="swiper-wrapper">
              {data[key].map((ele) => (
                <div className="swiper-slide" key={ele.match}>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">{ele.tournament}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{ele.match}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                  </div>
                </div>
                </div>
                
                ))}
              </div>
                
                  <div className="swiper-pagination"></div>

              
              <div className="swiper-button-prev" onClick={()=>{
                alert("hello")
              }}></div>
              <div className="swiper-button-next"></div>

            
              <div className="swiper-scrollbar"></div>
            </div>
            ))} */}

      <div className="container-fluid">
        <h1 className="text-center">
          <u>Today's Matches List by Category</u>
        </h1>
        {Object.keys(data).map((key) =>
          data[key].length == 0 ? (
            ""
          ) : (
            <div className="container">
              <h1 className="text-center">{key}</h1>
              <Swiper
                effect={"coverflow"}
                spaceBetween={50}
                slidesPerView={2}
                // onSlideChange={}
                // onSwiper={}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={{ clickable: true }}
                modules={[
                  EffectCoverflow,
                  Autoplay,
                  Keyboard,
                  Pagination,
                  Navigation,
                ]}
                className="mySwiper"
              >
                {data[key].map((ele) => (
                  <SwiperSlide>
                    <div className="card w-100" key={ele.match}>
                      <div className="card-body">
                        <h5 className="card-title">{ele.tournament}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {ele.match}
                        </h6>
                        <p className="card-text">
                          <h3>
                            At:{ele.stadium} ,{ele.country}
                          </h3>
                          <br />
                          <h5>On:{ele.start}</h5>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )
        )}
      </div>
    </>
  );
}
