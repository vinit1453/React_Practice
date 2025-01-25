import React, { useEffect, useRef, useState } from "react";

export default function MutationObserverExample() {
  const eleRef = useRef();
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");

  let mutationObserver = new MutationObserver((entries) => {
    console.log(entries);
  });
  const options = {
    childList: true,
    characterData: true,
    subtree: true,
    attributes: true,
    attributeName: true,
    attributeNamespace: true,
    nextSibling: true,
    oldValue: true,
    previousSibling: true,
  };
  useEffect(() => {
    mutationObserver.observe(eleRef.current, options);
  }, [eleRef]);
  return (
    <>
      <div className="nonMutation">
        <h3>Here changes wont be tracked</h3>
        <input type="text" onChange={(e) => setContent1(e.target.value)} />
        <span>{content1}</span>
      </div>
      <hr />
      <div className="mutation Observer" ref={eleRef}>
        <h3>Here changes will be tracked</h3>
        <input type="text" onChange={(e) => setContent2(e.target.value)} />
        <span>{content2}</span>

        <p>child of mutaion object</p>
      </div>
      <hr />
      <div className="nonMutation">
        <h3>Here changes wont be tracked</h3>
        <input type="text" onChange={(e) => setContent3(e.target.value)} />
        <span>{content3}</span>
      </div>
    </>
  );
}

/***
 * Mutation Observer is a built-in object that observes DOM Changes and
 * calls or fires a callback function to react to the changes in the DOM Tree.
 *
 *  options in Mutation Observer:-
 *          It’s a simple boolean option “What kind of changes to detect”
 *
 *        Example:childList — Detect changes in direct children of targetNode.
 *        subtree — Detect changes in all descendants of the node.
 *        attributes — Detect Attribute changes.
 *        attributeFilter — It provides a filter to detect particular attribute changes.
 *        characterData — which is used to observe the changes of text content.
 *        attributeOldValue — If it’s true, then It’ll pass old and new attribute data to the callback function, else pass only new data.
 *        characterDataOldValue — If it’s true, then It’ll pass old and new characterData to the callback function, else pass only new data.
 *
 * Applications:
 *  It is internally used to build lot of frameworks or libraries to add effect on change of another element
 * */
