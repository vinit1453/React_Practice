import React, { useRef, useState } from "react";

export default function OtpField({ length = 5 }) {
  const [otp, setOtp] = useState();
  const currIndex = useRef(0);

  const handleFieldClick = (e, index) => {
    currIndex.current++;
    //console.log(index + " -button clicked", e);
  };

  // Handle individual input changes
  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      // Allow only digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the current one is filled
      if (value && index < length - 1) {
        currIndex.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Working in Explorer, Remove non-digit characters by regx
    var clip = event.clipboardData.getData("text").replace(/\D/g, "");
    var data = clip.split("").slice(0, length);
    console.log("clip", data);
  };
  // Handle key navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      currIndex.current[index - 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      currIndex.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      currIndex.current[index + 1].focus();
    }
  };

  return (
    <>
      <div className="w-50 mx-auto my-4">
        <label for="inputPassword5" className="form-label">
          Password
        </label>
        <div
          className="w-50 mx-auto gap-2 d-flex flex-row justify-content-evenly"
          onPasteCapture={(event) => handlePaste(event)}
        >
          {Array.from({ length: length }, (_, index) => (
            <input
              type="text"
              id="inputPassword5"
              className="form-control w-20 text-center"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onClick={(event) => handleFieldClick(event, index)}
              maxLength={1}
              key={index}
            />
          ))}
        </div>

        <div id="passwordHelpBlock" className="form-text">
          Your password must be 8-20 characters long, contain letters
        </div>
      </div>
    </>
  );
}
