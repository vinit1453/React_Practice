import React, { useEffect } from "react";
import Internationalization from "../Internationalization/internationalization";
import ReducerEx from "./Examples/ReducerEx";
import Card from "./Sliders/Carousel";
import First from "./First";
import OtpField from "./otp/OtpField";
import OTPInput from "./otp/otpInput";
import AbortControllerExample from "../concepts/abortController/abortControllerExample";
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
          <label className="text-info">
            OTP Insert Field Functionality Implementation:
          </label>
          <OtpField />
          {/* <OTPInput /> */}
        </div>
        <hr />
        <div className="d-flex  justify-content-center flex-column">
          <label className="text-info">Abort controller Example</label>
          <AbortControllerExample />
          {/* <OTPInput /> */}
        </div>
        <hr />
      </div>
    </div>
  );
}
