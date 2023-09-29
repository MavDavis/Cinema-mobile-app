import { BOOK_CINEMA } from "../actions/types";
import dummy_data from "../assets/dummy";
const initialState = {
  movies: dummy_data,
};
const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_CINEMA:
      return {
        ...state,
        movies: state.movies.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    default:
      return state;
  }
};
export default cinemaReducer;
