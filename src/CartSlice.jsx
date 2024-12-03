import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const foundItem = state.items.find((item) => item.name === name);
      if (!foundItem) {
        state.items.push({
          name: name,
          image: image,
          cost: cost,
          quantity: 1
        });
      } else {
        foundItem.quantity++;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const foundItem = state.items.find((item) => item.name === name);
      if (foundItem) {
        foundItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
