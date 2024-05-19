import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';
import { toastifyFunc } from '../../../lib/toastifyLoaders';

export const postCourse = createAsyncThunk(
  'createcourse',
  async (formData, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Creating Course...');
      const { token, _id, _class } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/course`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: {
          ...formData,
          staff: _id,
          _class: _class,
        },
      });
      toastifyFunc('fulfilled', 'Course Created Successfully');
      return response.data;
    } catch (error) {
      toastifyFunc('rejected', customError(error));
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const createCourseSlice = createSlice({
  name: 'createcourse',
  initialState,
  reducers: { resetCourse: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(postCourse.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(postCourse.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(postCourse.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetCourse } = createCourseSlice.actions;
export default createCourseSlice.reducer;
