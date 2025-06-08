import {createAsyncThunk} from '@reduxjs/toolkit';

export interface SurveyAnswers {
  childName: string;
  childDOB: string;
  childGender: string;
  parentName: string;
  [key: string]: string;
  emotionalState: string;
}

export interface SurveyRequest {
  task_id: string;
  survey: SurveyAnswers;
}

export const submitSurvey = createAsyncThunk(
  'survey/submit',
  async (data: SurveyRequest, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/submit-survey',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка при отправке опроса');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Неизвестная ошибка'
      );
    }
  }
);
