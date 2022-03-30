import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducerFeed";
import postPageSliceReducer from "./postPage/reducerPost";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
});

export default reducer;
