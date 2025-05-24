import React from "react";
import { Controller } from "swiper";

export default function AbortControllerExample() {
  /**
   * @DEFINITION:
   *        Abort controller is used to restrict the user to hit multiple requests.
   * It will helps us to cancel all previous api calls and process latest call only using it signal property.
   *    signal: signal attribute provides the info/status of the request.
   *    aborted:boolean flag to identify weather the request in active or not
   *    onabort():function to call on abort function is called.
   *    reason: error message print
   *    abort(): method to destroy the request
   */
  let prevReq = null;
  const handleWithAbort = async () => {
    if (prevReq) {
      prevReq.reason = "Latest request processed";

      prevReq.abort();
    }
    console.log(prevReq);
    prevReq = new AbortController();
    const signal = prevReq.signal;
    signal.onAbort = function () {
      console.log("1 req aborted");
    };
    try {
      setTimeout(async () => {
        const load = await fetch("http://localhost:3000/users", { signal })
          .then(function (data) {
            console.log(prevReq);
            return data.json();
          })
          .then(function (data) {
            console.log(data);
          })
          .catch((e) => {
            console.log("error occured while fetching" + e);
          });
      }, 500);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request cancelled");
      }
      console.log("error while api call");
    }
  };
  const handleWithOutAbort = async () => {
    try {
      const load = await fetch("http://localhost:3000/users")
        .then(function (data) {
          // console.log(data);
          return data.json();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch((e) => {
          console.log("error occured while fetching" + e);
        });
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request cancelled");
      }
      console.log("error while api call");
    }
  };
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <div className="btn btn-danger btn-sm" onClick={handleWithAbort}>
            With AbortController
          </div>
          <div className="btn btn-warning btn-sm " onClick={handleWithOutAbort}>
            Without AbortController
          </div>
        </div>
      </div>
    </>
  );
}
