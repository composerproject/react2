import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import dragonReducer from "./reducer/dragonReducer.js";
import knightReducer from "./reducer/knightReducer.js";
import coupleReducer from "./reducer/coupleReducer.js";
import { COUPLE_SET_KNIGHT, COUPLE_SET_DRAGON, COUPLE_SET_ERROR } from "./constant/action-type.js";


const isInCouple = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case COUPLE_SET_DRAGON:
      if (state.couples.couples.some((couple) => couple.dragonId === action.payload)) {
        // console.log('middle dragon');
        store.dispatch({ type: COUPLE_SET_ERROR, payload: "This dragon is already taken." });
        return;
      } else {
        next(action);
      }
      break;
    case COUPLE_SET_KNIGHT:
      if (state.couples.couples.some((couple) => couple.knightId === action.payload)) {
        // console.log('middle knight');
        store.dispatch({ type: COUPLE_SET_ERROR, payload: "This knight is already taken." });
        return;
      } else {
        next(action);
      }
      break;
    default:
      next(action);
      break;
  }
};

const combinedReducer = combineReducers({
  dragons: dragonReducer,
  knights: knightReducer,
  couples: coupleReducer,
});

const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(isInCouple))
);

export default store;
