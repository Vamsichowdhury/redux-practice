import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers, {}, applyMiddleware());

export default store;
