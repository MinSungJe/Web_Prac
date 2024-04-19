import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        addCount(state, action) {
            let idx = state.findIndex((x) => x.id === action.payload)
            state[idx].count += 1
        },
        addItem(state, action) {
            let idx = state.findIndex((x) => x.id === action.payload.id)
            if (idx == -1)
                return [...state, action.payload]
            else
                state[idx].count += 1
        },
        deleteItem(state, action) {
            let idx = state.findIndex((x) => x.id === action.payload)
            state.splice(idx, 1)
        }
    }
})

export let { addCount, addItem, deleteItem } = cart.actions
export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})