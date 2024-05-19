import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../../lib/axiosIntance';
import { customError } from '../../../util/customError';
import { getUser } from '../../../hooks/useStorage';

export const fetchStudents = createAsyncThunk(
  'getstudents',
  async (sortby, { rejectWithValue }) => {
    try {
      const { token, _class } = getUser();
      const response = await AxiosInstance({
        url: `/students/sorted-in-class?sortby=${sortby}&_class=${_class}`,
        method: 'POST',
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

const getStudentsSlice = createSlice({
  name: 'getstudents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export default getStudentsSlice.reducer;
