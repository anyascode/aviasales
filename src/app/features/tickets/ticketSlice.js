import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTicketsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTicketsSuccess(state, action) {
      state.loading = false;
      state.tickets = action.payload;
    },
    fetchTicketsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setFilter(state, action) {},
  },
});

export const { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsFailure } = ticketSlice.actions;
export default ticketSlice.reducer;
