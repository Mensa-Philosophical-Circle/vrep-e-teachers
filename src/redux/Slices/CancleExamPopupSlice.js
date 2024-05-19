import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const cancelExamSlice = createSlice({

    name:'cancelExam',
    initialState,
    reducers:{

        cancelExamOpen:(state) => {

            state.value=true
        },

        cancelExamClose:(state) => {

            state.value=false
        }
    }


})

export const {cancelExamOpen , cancelExamClose} = cancelExamSlice.actions

export default cancelExamSlice.reducer