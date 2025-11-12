import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    compareItems: [],
}

export const compareSlice = createSlice({
    name:"compare",
    initialState,
    reducers:{
        addToCompare: (state, actions) => {
            const existingItem = state.compareItems.find((items) => items.id === actions.payload.id);
            if(!existingItem){
                state.compareItems.push({...actions.payload});
            }
        },
        removeFromCompare: (state, actions) => {
            state.compareItems = state.compareItems.filter((items) => items.id !== actions.payload.id);
        },
        clearCompare:(state) => {
            state.compareItems = [];
        }
    }
});

export const {
    addToCompare,
    removeFromCompare,
    clearCompare
} = compareSlice.actions;

export default compareSlice.reducer;