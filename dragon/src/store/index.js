import {legacy_createStore as createStore, combineReducers } from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
// import {composeWithDevTools} from "redux-devtools-extension";


const combinedReducer = combineReducers({
    dragons: dragonReducer,
    knights: knightReducer
  });

const store = createStore(
    combinedReducer
    // composeWithDevTools()
)

export default store