import {createSelector} from '@reduxjs/toolkit';

import type {RootState} from '../store';

import type {SurveyState} from './survey.slice';

const selectSurvayState: (state: RootState) => SurveyState = (state) =>
  state.survayState;

const selectSurveySuccess = createSelector(
  selectSurvayState,
  (state) => state.success
);

const selectSurveyLoading = createSelector(
  selectSurvayState,
  (state) => state.loading
);
const selectSurveyError = createSelector(
  selectSurvayState,
  (state) => state.error
);

export const surveySelectors = {
  selectSurveySuccess,
  selectSurveyLoading,
  selectSurveyError,
};
