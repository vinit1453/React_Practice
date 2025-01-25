import React, { useRef, useState, useEffect } from "react";

export default function IntersectionObserverExample() {
  const containerRef = useRef();
  const parentRef = useRef(1);
  const [isVisible, setVisible] = useState(false);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log("ref changed", entry);
    if (entry.isIntersecting) {
      //ccode to check if the element met with our given options or not
      //to disabling observation on last element
      //observe.unobserve(entry)
    }
  };
  const options = {
    root: null, //ancestor element that is used as the viewport for checking visibility of the target of the target
    // rootMargin: "-100px", //margin for the root element's bounding box before computing intersections
    threshold: 1, //percentage of the target's visibility the observer's callback should be executed,Between 0-1.0
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return (
    <div className="app">
      <div
        className="section bg-secondary"
        style={{ height: "100px" }}
        ref={parentRef}
      ></div>
      <div style={{ maxHeight: "150px", overflow: "scroll" }}>
        <div className="box bg-info" ref={containerRef}>
          card 1
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 2
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 3
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 4
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 5
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 6
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 7
        </div>
        <div className="box bg-info" ref={containerRef}>
          card 8
        </div>
        <div className="box bg-info">card 9</div>
        <div className="box bg-info">card 10</div>
        <div className="box bg-info">card 11</div>
        <div className="box bg-info">card 12</div>
      </div>
    </div>
  );
}
/**
 *  Intersection Observer:-
 *                  To trigger a task based on a element position.
 *
 *
 *    options:
 *      root: ancestor element that is used as the viewport for checking visibility of the target of the target
 *      rootMargin:margin for the root element's bounding box before computing intersections
 *      threshold:percentage of the target's visibility the observer's callback should be executed,Between 0-1.0
 *
 *
 *    Applications:
 *          Help ful implement infinite scrolling.
 *
 */
