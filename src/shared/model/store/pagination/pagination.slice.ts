import {createSlice} from '@reduxjs/toolkit';

export interface PaginationState {
  page: number;
  total: number;
}

const initialState: PaginationState = {
  page: 1,
  total: 3,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    nextPage(state) {
      if (state.page < state.total) {
        state.page += 1;
      }
    },
    prevPage(state) {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
  },
});

export const {nextPage, prevPage} = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
