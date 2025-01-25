// Sagas
// Import your sagas here!
import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";

// Connect types to sagas
const rootSaga = function* root() {
 // console.log("rootSaga called")
  yield all([
    // Seperate the sagas by comma
    fork(userSaga),
    
  ]);
};

export default rootSaga;