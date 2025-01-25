import { combineReducers } from 'redux'
import  userReducer  from "./userReducer";
export default combineReducers(
    //combine all reducers into single 
     {
        userReducer
    }
)

 


