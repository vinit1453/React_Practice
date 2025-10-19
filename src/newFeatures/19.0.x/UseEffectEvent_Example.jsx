import React, { useEffect } from "react";
import { useEffectEvent } from "react";
export default function UseEffectEvent_Example() {
  const [text, setText] = React.useState("");
  const onchangedText = useEffectEvent(() => {
    console.log("effect event ran");
    console.log("Input changed to:", text);
  });
  const onchangedText_without_Event = () => {
    console.log("Input changed to with onchangedText_with_Event:", text);
  };
  const onchangedTextwithParams = (text) => {
    console.log("Input changed to with onchangedTextwithParams:", text);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("useEffect ran");
      onchangedText(); //it captures latest state without any dependencies
      // onchangedTextwithParams(text); // passing latest state as param this will work only we pass dependencies to useEffect.
      // onchangedText_without_Event(); // it always returns initial state as it has on component load, seperate dependency need to pass
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="mx-auto w-75">
          <h2>UseEffect Event Tag Example</h2>
          <span>
            useEffectEvent is a React Hook that lets you extract non-reactive
            logic from your Effects into a reusable function called an Effect
            Event.
            <br />
            It returns a function (often called an Effect Event) which you call
            inside a useEffect (or useLayoutEffect or useInsertionEffect)
            instead of embedding everything inside the effect callback and
            managing dependencies manually.
            <br />
            <b>useEffectEvent</b> is allowed to read the latest state of
            variables without any dependency argument in useEffect params this
            will retrict to don't update entire state Object / DOM component.{" "}
            <br />
            We can also acheive same functionality by passing latest state as
            param to the function called inside useEffect but that will require
            adding those params in dependency array which may lead to multiple
            unneccessary calls to useEffect.
            <br />
            <b>Use cases are:</b> You start a video or animation once, but the
            callbacks (on progress, on frame) need to use current playback speed
            or UI state means even if the video URL is changes but video player
            setting like payback Speed, themes & other Settings needs not to be
            update or reset.
            <br /> also like The WebSocket connects only when roomId changes.
            The message handler always sees the latest theme or state.
          </span>
          <input
            type="text"
            placeholder="Type here to see console log"
            onChange={(event) => setText(event.target.value)}
          />
        </div>
      </div>
    </>
  );
}
