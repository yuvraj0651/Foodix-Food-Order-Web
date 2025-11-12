import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    loading: false,
    error: null
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_ , {rejectWithValue}) => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            if (!response.ok) {
                throw new Error("Invalid url. no data found.")
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const ProductsApi = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default ProductsApi.reducer;