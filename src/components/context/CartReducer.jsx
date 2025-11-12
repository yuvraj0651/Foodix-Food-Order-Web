export const initialState = {
    cartItems: [],
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log("Adding the product to cart");
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        return item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
                }
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        }
        case INCREASE_CART_QUANTITY: {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        return item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    })
                }
            }
            return state;
        }
        case DECREASE_CART_QUANTITY: {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem && existingItem.quantity > 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => {
                        return item.id === action.payload.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    })
                }
            }else{
                return{
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
                }
            }
        }
        case CLEAR_CART:{
            return{
                ...state,
                cartItems : []
            }
        }
        default:
            return state
    }
}