import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const deleteExamSlice = createSlice({

    name:'deleteExam',
    initialState,
    reducers:{

        deleteExamOpen:(state) => {

            state.value=true
        },

        deleteExamClose:(state) => {

            state.value=false
        }
    }


})

export const {deleteExamOpen , deleteExamClose} = deleteExamSlice.actions

export default deleteExamSlice.reducer