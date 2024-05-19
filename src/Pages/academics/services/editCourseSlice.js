import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';
import { toastifyFunc } from '../../../lib/toastifyLoaders';

export const updateCourse = createAsyncThunk('editcourse', async (course, { rejectWithValue }) => {
  toastifyFunc('dismiss');
  try {
    toastifyFunc('pending', 'Updating Course...');
    const { token } = getUser();
    const response = await AxiosInstance({
      url: `/api/v1/courses/${course._id}`,
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      data: { name: course.name },
    });
    toastifyFunc('fulfilled', 'Course Updated Successfully');
    return response.data;
  } catch (error) {
    toastifyFunc('rejected', customError(error));
    return rejectWithValue(customError(error));
  }
});

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const editCourseSlice = createSlice({
  name: 'editcourse',
  initialState,
  reducers: { resetEditCourse: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(updateCourse.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(updateCourse.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetEditCourse } = editCourseSlice.actions;
export default editCourseSlice.reducer;
