import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
    filters: [0, 1, 2, 3],
    sorting: 'cheapest',
    done: false,
    ticketId: 1,
  },
  reducers: {
    fetchTicketsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addTickets(state, action) {
      const newTickets = action.payload.map((ticket) => ({
        ...ticket,
        id: state.ticketId++,
      }));

      state.tickets = [...state.tickets, ...newTickets];
    },
    fetchTicketsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    toggleFilter(state, action) {
      const value = action.payload;
      const index = state.filters.indexOf(value);

      if (index === -1) {
        state.filters.push(value);
      } else {
        state.filters.splice(index, 1);
      }
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setSorting(state, action) {
      state.sorting = action.payload;
    },
    finishFetching(state) {
      state.loading = false;
      state.done = true;
    },
  },
});

export const {
  fetchTicketsRequest,
  fetchTicketsFailure,
  addTickets,
  toggleFilter,
  setFilters,
  setSorting,
  finishFetching,
} = ticketSlice.actions;
export default ticketSlice.reducer;
