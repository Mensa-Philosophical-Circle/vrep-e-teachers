import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../../lib/axiosIntance';
import { customError } from '../../util/customError';
import { getUser } from '../../hooks/useStorage';
import { toastifyFunc } from '../../lib/toastifyLoaders';

export const removeTimetable = createAsyncThunk(
  'deletetimetable',
  async (id, { rejectWithValue }) => {
    toastifyFunc('dismiss');
    try {
      toastifyFunc('pending', 'Deleting timetable');
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/timetable/remove`,
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        data: { id },
      });
      toastifyFunc('fulfilled', 'Timetable Deleted successfully');
      return response.data;
    } catch (error) {
      toastifyFunc('rejected', customError(error.message));
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: 'idle',
  data: null,
  error: null,
};

const deleteTimetableSlice = createSlice({
  name: 'deletetimetable',
  initialState,
  reducers: { resetDelete: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(removeTimetable.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(removeTimetable.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(removeTimetable.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { resetDelete } = deleteTimetableSlice.actions;
export default deleteTimetableSlice.reducer;
