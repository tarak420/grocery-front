import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, fetchCart } from './cartApi';

const initialState = {
  cart: [],
  status: 'idle',
  error: null,
};

// Thunks for async operations
export const addProductToCart = createAsyncThunk('cart/add', async (item) => {
  const response = await addToCart(item);
  return response; // The response should be the updated cart
});

export const removeProductFromCart = createAsyncThunk('cart/remove', async (productId) => {
  const response = await removeFromCart(productId);
  return response; // The response should be the updated cart
});

export const loadCart = createAsyncThunk('cart/load', async () => {
  const response = await fetchCart();
  return response; // Load the cart on startup
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cart = action.payload; // Assume API returns updated cart
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.cart = state.cart.filter((item) => item.product !== action.meta.arg);
      });
  },
});

export default cartSlice.reducer;
