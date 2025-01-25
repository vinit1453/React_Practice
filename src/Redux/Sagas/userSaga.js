import { put, call, takeLatest, all,takeEvery } from "redux-saga/effects";
import UserService from "../Services/userServices"

//  const UserService = new UserService();
export function* getAll() {
    try {
       console.log("api saga called")
       const response =yield fetch('http://localhost:3000/users');
       const res=yield response.json();
       console.log("api data",res)
       yield put({ type: "fetchUsers", users:res });
      //calling api from service class
            // const res=yield call(UserService.getAll())
            // yield put({ type: "fetchUsers", res });
        // const res = yield call(UserService.getAll);
        // console.log("Usersaga",res)
        // yield put({res}) ;
      } catch (error) {
        yield put({ type: "error", error });
      }

}
export function* getAllUsers() {
  //console.log("get All")
  //call a saga based on action request in b/w action,reducer 
  yield takeEvery('getAll', getAll)
}

export function* deleteUser(action) {

}

export function* editUser(action) {}

export function* updateUser(action) {}

export default function* allSaga() {
  //console.log("userSaga called")
    yield all([
      getAllUsers(),
     
    ]);
  }