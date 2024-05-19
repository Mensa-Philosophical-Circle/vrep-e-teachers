import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};
const WhichTermSlice = createSlice({

    name:'whichTerm',
    initialState,
    reducers:{

        selectWhichTerm:(state ,actions) => {

            state.value=actions.payload
        },

    }


})

export const {selectWhichTerm } = WhichTermSlice.actions

export default WhichTermSlice.reducer