import React, { useRef, useState, useEffect } from "react";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [last, setLast] = useState(false);
  let lastCount = data.length;
  const lastEleRef = useRef();
  const options = {
    root: null, //ancestor element that is used as the viewport for checking visibility of the target of the target
    rootMargin: "-100px", //margin for the root element's bounding box before computing intersections
    threshold: 0.2, //percentage of the target's visibility the observer's callback should be executed,Between 0-1.0
  };
  const observer = new IntersectionObserver(callbackFunction, options);

  function callbackFunction(entries) {
    const [entry] = entries;
    //  console.log("ref changed", entry);
    //checking last element instersecting to our criteria or not
    if (entry.isIntersecting) {
      loadData();
    }
  }
  useEffect(() => {
    //loading data on first time component loads
    loadData();
  }, []);
  useEffect(() => {
    if (lastEleRef.current) {
      //console.log("last Element ", lastEleRef);
      observer.observe(lastEleRef.current);
    }
    return () => {
      if (lastEleRef.current) observer.unobserve(lastEleRef.current);
    };
  }, [options]);

  function loadData() {
    ///api call
    let data = [];
    if (lastCount == 50) {
      setData((prev) => [
        ...prev,
        { header: "Done", content: "All cards completedd" },
      ]);
      setLast(true);
      return;
    }
    for (let i = 0; i < 10; i++) {
      let count = lastCount++;
      data.push({
        header: "card" + count,
        content: "content" + count,
      });
    }
    if (lastCount) {
      setData((prevData) => [...prevData, ...data]);
    } else {
      setData([...data]);
    }
  }

  return (
    <>
      <div className="w-50 mx-auto bg-white parent">
        <h1>Infinite Scroll Example</h1>
        <hr />
        <div className="cardsContainer mh-50 text-truncate text-wrap">
          {data.length ? (
            data.map((e, i) => {
              // Only assign lastEleRef to the last element
              const isLastElement = i === data.length - 1;
              return (
                <div
                  class="card w-50 mx-auto m-2"
                  key={i}
                  ref={!last && isLastElement ? lastEleRef : null}
                >
                  <div class="card-header">{e.header}</div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>{e.content}</p>
                    </blockquote>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div class="card">
                <div class="card-header">Oppps....!</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>No Data presents.....</p>
                  </blockquote>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;
