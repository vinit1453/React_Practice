import React, { useEffect, useState } from "react";
import useCapitalize from "../components/Examples/customHooks/Capitalize";

export default function Test1() {
  const [selectedSeats, setSelectedSeates] = useState([]);
  const max_Limit = 5;

  const data = [
    { catgory: "economy", rows: 8, col: 8, prefix: "E" },
    { catgory: "premium", rows: 5, col: 5, prefix: "P" },
    { catgory: "VVIP", rows: 3, col: 3, prefix: "V" },
  ];

  function maxSeatsLimit() {
    if (selectedSeats.length === max_Limit) {
      //console.log("boolean check");
      return true;
    }
    // console.log("false check");
    return false;
  }
  const handleSeatSelection = (e) => {
    if (e.target.checked) {
      if (maxSeatsLimit()) {
        alert("Max " + max_Limit + " seats for one time");
        e.target.checked = false;
        return;
      }
      // console.log("checked", e.target.value);
      setSelectedSeates((prev) => [...prev, e.target.value]);
    } else {
      var index = selectedSeats.indexOf(e.target.value);
      // console.log("deleted", index);
      // delete selectedSeats[index];
      selectedSeats.splice(index, 1);
    }
    return;
  };
  const handleConfirmBooking = () => {
    if (
      window.confirm(
        "Are You Sure want to Book " +
          selectedSeats.length +
          " Seats!" +
          "\n" +
          selectedSeats
      )
    ) {
      alert("Booked");
      clearAllFields();
    } else {
      alert("Booking canceld");
    }
  };

  const clearAllFields = () => {
    window.location.reload(false);
  };
  return (
    <>
      {data.map((e) => {
        return (
          <>
            <div>
              <h1>{useCapitalize(e.catgory)}</h1>
              {[...Array(e.rows)].map((row, i) => {
                return (
                  <div className="d-flex container-fluid flex-wrap  gap-2 ">
                    {[...Array(e.col)].map((col, colIndex) => {
                      return (
                        <p className="">
                          {/* <span>
                             {i + 1}- {colIndex + 1} 
                           
                          </span> */}
                          <input
                            type="checkbox"
                            onChangeCapture={(e) => handleSeatSelection(e)}
                            value={e.prefix + "" + (i + 1) + "" + colIndex}
                          />
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <hr />
          </>
        );
      })}
      <div>
        <button className="" onClick={() => handleConfirmBooking()}>
          Book
        </button>
      </div>
    </>
  );
}
