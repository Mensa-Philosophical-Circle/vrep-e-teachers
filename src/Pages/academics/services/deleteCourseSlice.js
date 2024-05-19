import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../../lib/axiosIntance";
import { customError } from "../../../util/customError";
import { getUser } from "../../../hooks/useStorage";
import { toastifyFunc } from "../../../lib/toastifyLoaders";

export const removeCourse = createAsyncThunk(
  "deletecourse",
  async (course, { rejectWithValue }) => {
    toastifyFunc("dismiss");
    try {
      toastifyFunc("pending", "Deleting Course...");
      const { token } = getUser();
      const response = await AxiosInstance({
        url: `/api/v1/courses/${course._id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      toastifyFunc("fulfilled", "Course Deleted Successfully");
      return response.data;
    } catch (error) {
      toastifyFunc("rejected", customError(error));
      return rejectWithValue(customError(error));
    }
  }
);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const deleteCourseSlice = createSlice({
  name: "deletecourse",
  initialState,
  reducers: { resetDeleteCourse: (state) => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(removeCourse.pending, (state) => {
        state.status = "pending";
      })
      .addCase(removeCourse.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(removeCourse.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { resetDeleteCourse } = deleteCourseSlice.actions;
export default deleteCourseSlice.reducer;
