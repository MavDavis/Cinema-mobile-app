import {
  ADD_CINEMA_TICKET,
  MARK_TICKET_CHOSEN,
  ADD_CINEMA,
  BOOK_CINEMA,
} from "../actions/types";

import dummy_data from "../assets/dummy";
import dummyCinemaTickets from "../assets/dummyCinemaTickets";
const initialState = {
  movies: dummy_data,
  currentMovie: "",
  cinema: "",
  dummyCinemaTickets: dummyCinemaTickets,
};
const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_CINEMA:
      return {
        ...state,
        movies: state.movies.concat({
          key: Math.random(),
          value: action.payload,
          currentMovie: action.payload,
        }),
      };
    case ADD_CINEMA:
      return {
        ...state,
        currentMovie: action.payload,
      };
    case ADD_CINEMA_TICKET:
      return {
        ...state,
        cinema: action.payload,
      };
    case MARK_TICKET_CHOSEN:
      const { payload } = action;

      const updatedTickets = state.dummyCinemaTickets.map((ticket) => {
        if (ticket.id === payload) {
          return {
            ...ticket,
            picked: ticket.picked === "chosen" ? "available" : "chosen",
          };
        }
        return ticket;
      });

      return {
        ...state,
        dummyCinemaTickets: updatedTickets,
      };

    default:
      return state;
  }
};
export default cinemaReducer;
