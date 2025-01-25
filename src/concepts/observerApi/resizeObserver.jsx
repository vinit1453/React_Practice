import React, { useEffect, useState, useRef } from "react";

export default function ResizeObserverExample() {
  const eleRef = useRef();
  const [result, setResult] = useState("none");
  const [editable, setEditable] = useState(true);
  const resizeObserver = new ResizeObserver((entries) => {
    console.log(entries);
    setResult(entries[0].contentRect.height > 150 ? "oversized" : "normal");
    setEditable(false);
  }, {});
  useEffect(() => {
    resizeObserver.observe(eleRef.current);
  }, [eleRef]);
  return (
    <>
      <h3>Resize Observer-{result}</h3>
      <div className="bg bg-info d-flex flex-row mx-auto" ref={eleRef}>
        <div className="bg bg-danger">
          <div style={{ maxWidth: "400px", maxHeight: "400px" }}>ssjjs</div>
        </div>
        <div>
          <div
            id="ip"
            contentEditable={"true"}
            suppressContentEditableWarning={true}
          >
            Text
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Defnition:-  The ResizeObserver interface reports changes to the dimensions of
 *              an Element's content or border box, or the bounding box of an SVGElement.
 *              (ResizeObserver is used to observe changes to Element's size,
 *                  where css media queries work based on window resizes)
 *
 * Similar ways:-
 *          either use Media queries in CSS @media (mediaQueryString) {...}
 *          in JS window.matchMedia(mediaQueryString)
 *          window.addEventListener('resize', ()=>{...})
 *
 *  Observation will respond to every change of Element's size and fires if Element is rendered and it’s size is not 0,0 as well as when:
 *              Element is inserted/removed from DOM,
 *              Element display gets set to none.
 *  Observation will do not fire for:
 *              non-replaced inline Elements (span, strong, i, b, em, etc),
 *              changes to Element by CSS transforms.
 *
 *  Syntax:
 *            const resizeObserver = new ResizeObserver(callBackFucntion, options);
 *          options:-
 *              content-box (default value): size of element's content area,
 *              border-box: size of element's box border area (content + padding + border),
 *              device-pixel-content-box: size of element's content area in device pixels.
 *                                      Easier to understand it as window.devicePixelRatio * contentSize.
 *              Note that due to browser-specific subpixel calculations it's only approximately.
 *
 *  Applications:
 *          It is used to implement @mediaQuery similar functionalities.
 **/
