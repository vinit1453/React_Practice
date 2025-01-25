import React, { useReducer, useContext } from "react";
let iniCount = { count: 0 };
let context1 = React.createContext(null);
function init(initialCount) {
  return { count: initialCount };
}
function reducer(state = iniCount, action) {
  switch (action.type) {
    case "join":
      return { count: state.count + 1 };
      break;
    case "exit":
      return { count: state.count - 1 };
      break;
    case "reset":
      return { count: (state.count = 0) };
    default:
      return state;
  }
}
export function Child() {
  const context = useContext(context1);
  return (
    <>
      <h3>child of Reducer Parent Component</h3>
      <p>{context.count}</p>
    </>
  );
}
export default function ReducerEx() {
  const [state, dispatch] = useReducer(reducer, iniCount);
  function joinClick() {
    dispatch({ type: "join" });
  }
  function delClick() {
    dispatch({ type: "exit" });
  }
  function resetClick() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1>Count:{state.count}</h1>
          <context1.Provider value={{ count: state.count }}>
            <Child />
          </context1.Provider>
          <div className="d-flex justify-content-between">
            <div className="btn btn-danger btn-sm" onClick={joinClick}>
              Subscribe
            </div>
            <div className="btn btn-warning btn-sm " onClick={delClick}>
              Un-Subscribe
            </div>
            <div className="btn btn-info btn-sm " onClick={resetClick}>
              Reset
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
