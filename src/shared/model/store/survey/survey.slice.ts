import {createSlice} from '@reduxjs/toolkit';

import {submitSurvey} from './survey.thunk';

export interface SurveyState {
  loading: boolean;
  error?: string;
  success: boolean;
}

const initialState: SurveyState = {
  loading: false,
  error: undefined,
  success: false,
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    resetSurveyState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitSurvey.pending, (state) => {
        state.loading = true;
        state.error = undefined;
        state.success = false;
      })
      .addCase(submitSurvey.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitSurvey.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const surveyReducer = surveySlice.reducer;
