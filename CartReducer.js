import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addtocart: (state, action) => {
            const itemincart = state.cart.find((item) => item.id == action.payload.id);
            if (itemincart) {
                itemincart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removefromcart: (state, action) => {
            const removefromcart = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removefromcart
        },
        incrementquantity: (state, action) => {
            const itemincart = state.cart.find((item) => item.id == action.payload.id)
            itemincart.quantity++;
        },
        decrementquantity: (state, action) => {
            const itemincart = state.cart.find((item) => item.id == action.payload.id)
            if (itemincart.quantity == 1) {
                const removefromcart = state.cart.filter((item) => item.id !== action.payload.id)
            } else {
                itemincart.quantity--;
            }
        }
    }
})
export default cartSlice.reducer;
export const { addtocart, removefromcart, incrementquantity, decrementquantity } = cartSlice.actions