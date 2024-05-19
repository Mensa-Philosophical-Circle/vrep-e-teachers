import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';

export const fetchDatacount = createAsyncThunk('datacount', async (_, { rejectWithValue }) => {
  try {
    const { token, _id, _class } = getUser();
    const response = await AxiosInstance({
      url: '/api/v1/datacount/staff',
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      data: { staff: _id, _class },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(customError(error));
  }
});

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const datacountSlice = createSlice({
  name: 'datacount',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDatacount.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchDatacount.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchDatacount.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default datacountSlice.reducer;
