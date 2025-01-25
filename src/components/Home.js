import React, { useEffect } from "react";
import Internationalization from "../Internationalization/internationalization";
import ReducerEx from "./Examples/ReducerEx";
import Card from "./Sliders/Carousel";
import First from "./First";
export default function Home() {
  return (
    <div className="">
      <h1>Home</h1>
      <div className="">
        <div className="d-flex  justify-content-around flex-column">
          <label className="text-info">Internalization:</label>
          <Internationalization />
        </div>
        <hr />
        <div className="d-flex  justify-content-center flex-column">
          <label className="text-info">Redux Implementation:</label>
          <ReducerEx />
        </div>
        <hr />
        <div className="d-flex  justify-content-center flex-column">
          <label className="text-info">Next Implementation:</label>
        </div>
        <hr />
      </div>
    </div>
  );
}
