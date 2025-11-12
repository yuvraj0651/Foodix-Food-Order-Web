import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../CartSlice.jsx";
import wishlistReducer from "../WishlistSlice.jsx";
import compareReducer from "../ComapreSlice.jsx";
import ProductReducer from "../../../components/API/Thunk/ProductsApi.jsx";
import { api } from "../../API/RTK-Query/ProductsQuery.jsx";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
        products: ProductReducer,

        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(api.middleware)

})

export default store;