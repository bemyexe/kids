import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../store';

import type {UploadState} from './upload.slice';

const selectUploadState: (state: RootState) => UploadState = (state) =>
  state.uploadState;

const selectTaskId = createSelector(selectUploadState, (state) => state.taskId);
const selectUploadLoading = createSelector(
  selectUploadState,
  (state) => state.loading
);
const selectUploadError = createSelector(
  selectUploadState,
  (state) => state.error
);

export const uploadSelectors = {
  selectTaskId,
  selectUploadLoading,
  selectUploadError,
};
