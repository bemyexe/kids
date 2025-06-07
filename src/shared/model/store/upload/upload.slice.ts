import {createSlice} from '@reduxjs/toolkit';

import {uploadImages} from './upload.thunk';

export interface UploadState {
  taskId?: string;
  loading: boolean;
  error?: string;
}

const initialState: UploadState = {
  taskId: undefined,
  loading: false,
  error: undefined,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImages.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(uploadImages.fulfilled, (state, action) => {
        state.loading = false;
        state.taskId = action.payload;
      })
      .addCase(uploadImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const uploadReducer = uploadSlice.reducer;
