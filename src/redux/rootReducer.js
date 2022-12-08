import { combineReducers } from "redux";
import BatReducer from "./batReducer";
import BallReducer from './ballReducer';
import userReducer from './userReducer'
const RootReducer=combineReducers({
    bat:BatReducer,
    ball:BallReducer,
    user:userReducer

})
export default RootReducer