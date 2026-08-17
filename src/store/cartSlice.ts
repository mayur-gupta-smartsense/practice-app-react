import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Cart = { items: Record<string, number> }
const initialState: Cart = { items: {} }

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, actions: PayloadAction<{ id: string, qty?: number }>) => {
            const { id, qty = 1 } = actions.payload
            state['items'][id] = (state['items'][id] || 0) + qty
        },
        updateCart: (state, actions: PayloadAction<{ id: string, qty: number }>) => {
            const { id, qty = 1 } = actions.payload;
            if (qty <= 0) {
                delete state.items[id];
            } else {
                state.items[id] = qty;
            }
        },
        removeCart: (state, actions: PayloadAction<{ id: string }>) => {
            const { id } = actions.payload;
            delete state['items'][id];
        }
    }
})



export const { addToCart, updateCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer 