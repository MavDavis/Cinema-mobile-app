export const BOOK_CINEMA = "BOOK_CINEMA";
export const ADD_CINEMA = "ADD_CINEMA";
export const ADD_CINEMA_TICKET = "ADD_CINEMA_TICKET";
export const MARK_TICKET_CHOSEN = "MARK_TICKET_CHOSEN";

export const addCinema = (cinemaName) => ({
  type: ADD_CINEMA,
  payload: cinemaName,
});
export const addCinemaTicket = (cinemaTicket) => ({
  type: ADD_CINEMA_TICKET,
  payload: cinemaTicket,
});
export const markTicketChosen = (ticket) => ({
  type: MARK_TICKET_CHOSEN,
  payload: ticket,
});
