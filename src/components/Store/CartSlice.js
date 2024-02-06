import { createSlice } from "@reduxjs/toolkit"


const initialCartState = {
  items: [],
  totalQuantity: 0,
  isActive: false
}

const CartSlice = createSlice({
  name: 'cartItems',
  initialState: initialCartState,
  reducers: {

    addItem(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      const ExistingCartItem = state.items.find((item) => item.id === newItem.id)
      if (!ExistingCartItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          title: newItem.title,
        })
      }
      else {
        ExistingCartItem.quantity++;
        ExistingCartItem.total = ExistingCartItem.total + newItem.price
      }
    },

    removeItem(state, action) {
      const id = action.payload

      state.totalQuantity--
      const ExistingCartItem = state.items.find(item => item.id === id)

      if (ExistingCartItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      }
      else {
        ExistingCartItem.quantity--
        ExistingCartItem.total = ExistingCartItem.total - ExistingCartItem.price
      }

    },

    openCloseCart(state, action) {
      state.isActive = !state.isActive
    }

  }
})



export const CartAction = CartSlice.actions;

export default CartSlice.reducer;