import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';
import { toastifyFunc } from '../../../lib/toastifyLoaders';

export const updateAttendance = createAsyncThunk(
  'editattendance',
  async (data, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'updating attendance...');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/attendance`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: data,
      });
      toastifyFunc('fulfilled', 'attendance updated successfully');
      return response.data;
    } catch (error) {
      toastifyFunc('rejected', customError(error).message);
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const editAttendanceSlice = createSlice({
  name: 'editattendance',
  initialState,
  reducers: { resetAttendance: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(updateAttendance.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateAttendance.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(updateAttendance.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetAttendance } = editAttendanceSlice.actions;
export default editAttendanceSlice.reducer;
