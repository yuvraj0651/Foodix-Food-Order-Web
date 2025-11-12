import { useReducer } from "react";
import CartContext from "./CartContext";
import { CartReducer, initialState } from "./CartReducer";

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product });
    };

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    };

    const increaseQty = (id) => {
        dispatch({ type: "INCREASE_CART_QUANTITY", payload: { id } });
    };

    const decreaseQty = (id) => {
        dispatch({ type: "DECREASE_CART_QUANTITY", payload: { id } });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    return (
        <CartContext.Provider value={{addToCart , removeFromCart , increaseQty , decreaseQty , clearCart , cartItems: state.cartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider