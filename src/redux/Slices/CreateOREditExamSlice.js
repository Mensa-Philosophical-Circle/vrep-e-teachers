import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

const createOrEditSlice = createSlice({

    name:'createOrEdit',
    initialState,
    reducers:{

        create:(state) => {

            state.value=true
        },

        edit:(state) => {

            state.value=false
        }
    }


})

export const {create , edit} = createOrEditSlice.actions

export default createOrEditSlice.reducer