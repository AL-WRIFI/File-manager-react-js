import { createStore ,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AuthReducer from "../Reducer/AuthReducer";

const store = createStore(
    combineReducers({AuthReducer}),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;