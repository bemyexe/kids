import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../store';

import type {PaginationState} from './pagination.slice';

const selectPaginationState: (state: RootState) => PaginationState = (state) =>
  state.paginationState;

const selectPaginationPage = createSelector(
  selectPaginationState,
  (state) => state.page
);

const selectPaginationTotal = createSelector(
  selectPaginationState,
  (state) => state.total
);

export const paginationSelectors = {
  selectPaginationPage,
  selectPaginationTotal,
};
