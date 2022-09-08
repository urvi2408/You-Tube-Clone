import watchlater_reducer from "./watchlater_reducer";
import LikeVideo_reducer from "./likeVideo_reducer";
import History_reducer from "./History_reducer";
// import DownLoad_reducer from "./DownLoad_reducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    w_reducer : watchlater_reducer,
    L_reducer : LikeVideo_reducer,
    H_reducer : History_reducer,
})

export default rootReducers;