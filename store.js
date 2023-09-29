import { createStore, combineReducers } from "redux";
import cinemaReducer from "./reducers/cinemaReducer";
const rootReducer = combineReducers({
  cinema: cinemaReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
