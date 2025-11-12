import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistItems: [],
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, actions) => {
            const existingItem = state.wishlistItems.find((items) => items.id === actions.payload.id);
            if (!existingItem) {
                state.wishlistItems.push({ ...actions.payload });
            }
        },
        removeFromWishlist: (state, actions) => {
            state.wishlistItems = state.wishlistItems.filter((items) => items.id !== actions.payload.id);
        },
        clearWishlist: (state) => {
            state.wishlistItems = [];
        }
    }
});

export const {
    addToWishlist,
    removeFromWishlist,
    clearWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;