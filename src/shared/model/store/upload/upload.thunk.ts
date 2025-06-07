import {createAsyncThunk} from '@reduxjs/toolkit';

export const uploadImages = createAsyncThunk(
  'upload/uploadImages',
  async (formData: FormData, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Ошибка при загрузке изображений');
      }

      const data = await response.json();
      return data.task_id;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Неизвестная ошибка'
      );
    }
  }
);
