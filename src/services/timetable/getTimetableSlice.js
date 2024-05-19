import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';

export const fetchTimetable = createAsyncThunk(
  'gettimetable',
  async (sortby, { rejectWithValue }) => {
    try {
      const { token, _id } = getUser();
      const response = await AxiosInstance({
        url: `api/v1//timetable/staff/${_id}`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}`, sortby: sortby },
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

const getTimetableSlice = createSlice({
  name: 'gettimetable',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimetable.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchTimetable.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchTimetable.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getTimetableSlice.reducer;
