import {legacy_createStore as createStore, combineReducers } from "redux";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.js";
// import {composeWithDevTools} from "redux-devtools-extension";


const combinedReducer = combineReducers({
    dragons: dragonReducer,
    knights: knightReducer,
    couples: coupleReducer
  });

const store = createStore(
    combinedReducer
    // composeWithDevTools()
)

export default store