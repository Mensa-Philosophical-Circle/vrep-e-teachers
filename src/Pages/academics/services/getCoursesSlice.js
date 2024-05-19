import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../lib/axiosIntance";
import { customError } from "../../../util/customError";
import { getUser } from "../../../hooks/useStorage";

export const fetchCourses = createAsyncThunk(
  "getcourses",
  async (_, { rejectWithValue }) => {
    try {
      const { token, _id, _class } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/courses/search?staff=${_id}&_class=${_class}`,
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const getCoursesSlice = createSlice({
  name: "getcourses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default getCoursesSlice.reducer;
