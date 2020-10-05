import { createStore, applyMiddleware } from "redux";
import AllREducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(AllREducers, composeWithDevTools(applyMiddleware()));

export default store;
