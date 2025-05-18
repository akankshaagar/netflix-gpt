import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        isGptSearch:false,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.isGptSearch =!state.isGptSearch;

        }

    }
});

export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;