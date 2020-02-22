import {combineReducers} from "redux";
import videos from "./youTubeReducers";

const rootReducer = combineReducers({
    videos
})

export default rootReducer;