import React, { useState, useRef } from "react";

const OTPInput2 = ({ length = 6 }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  // Handle individual input changes
  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      // Allow only digits
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle paste event at the container level
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // Only digits
    console.log("paste", pasteData);

    if (pasteData) {
      const pasteArray = pasteData.split("").slice(0, length);
      const newOtp = [...otp];

      pasteArray.forEach((char, idx) => {
        newOtp[idx] = char;
        if (inputRefs.current[idx]) {
          inputRefs.current[idx].value = char;
        }
      });

      setOtp(newOtp);

      // Focus the next empty input
      const nextIndex =
        pasteArray.length < length ? pasteArray.length : length - 1;
      inputRefs.current[nextIndex].focus();
    }
  };

  // Handle key navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div
      style={{ display: "flex", gap: "8px" }}
      onPaste={handlePaste} // Attach the paste event here
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            width: "40px",
            height: "40px",
            fontSize: "20px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput2;
