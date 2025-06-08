import {useDispatch} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {paginationReducer} from './pagination/pagination.slice';
import {surveyReducer} from './survey/survey.slice';
import {uploadReducer} from './upload/upload.slice';

export const store = configureStore({
  reducer: {
    uploadState: uploadReducer,
    survayState: surveyReducer,
    paginationState: paginationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
