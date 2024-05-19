import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const finishedExamSlice = createSlice({

    name:'finishedExam',
    initialState,
    reducers:{

        finishedExamOpen:(state) => {

            state.value=true
        },

        finishedExamClose:(state) => {

            state.value=false
        }
    }


})

export const {finishedExamOpen , finishedExamClose} = finishedExamSlice.actions

export default finishedExamSlice.reducer