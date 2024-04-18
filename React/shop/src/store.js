import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increaseOne(state, action) {
            let target = state.find((x) => {
                return x.id == action.payload
            })
            target.count += 1
        }
    }
})

export let { increaseOne } = cart.actions
export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
})