import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
} 

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, actions) => {
            const existingItem = state.cartItems.find((item) => item.id === actions.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...actions.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, actions) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== actions.payload.id);
        },
        increaseCartItemQuantity: (state, actions) => {
            const existingItem = state.cartItems.find((item) => item.id === actions.payload.id);
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1;
            }
        },
        decreaseCartItemQuantity: (state, actions) => {
            const existingItem = state.cartItems.find((item) => item.id === actions.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                }
                else {
                    state.cartItems = state.cartItems.filter((item) => item.id !== actions.payload.id);
                }
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseCartItemQuantity,
    decreaseCartItemQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;