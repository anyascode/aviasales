import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
    filters: [0, 1, 2, 3],
  },
  reducers: {
    fetchTicketsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addTickets(state, action) {
      state.loading = false;
      state.tickets = [...state.tickets, ...action.payload];
    },
    fetchTicketsSuccess(state, action) {
      state.loading = false;
      state.tickets = action.payload;
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
  },
});

export const { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFailure, addTickets, toggleFilter, setFilters } =
  ticketSlice.actions;
export default ticketSlice.reducer;
