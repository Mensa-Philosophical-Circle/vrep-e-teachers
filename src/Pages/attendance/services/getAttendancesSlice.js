import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';

export const fetchAttendances = createAsyncThunk(
  'getattendances',
  async (_, { rejectWithValue }) => {
    try {
      const { token, _class } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/attendance/class`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: { _class },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const getAttendancesSlice = createSlice({
  name: 'getattendances',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendances.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchAttendances.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchAttendances.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getAttendancesSlice.reducer;
