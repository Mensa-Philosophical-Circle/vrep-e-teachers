import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';
import { toastifyFunc } from '../../lib/toastifyLoaders';

export const updateTimetable = createAsyncThunk(
  'edittimetable',
  async (data, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Updating timetable');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/timetable/update`,
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        data: data,
      });
      toastifyFunc('fulfilled', 'Timetable updated successfully');
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

const editTimetableSlice = createSlice({
  name: 'edittimetable',
  initialState,
  reducers: { resetEdit: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(updateTimetable.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateTimetable.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(updateTimetable.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetEdit } = editTimetableSlice.actions;
export default editTimetableSlice.reducer;
