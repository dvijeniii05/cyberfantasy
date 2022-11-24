import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../slices/productsSlice'

export const productStore = configureStore({
    reducer: {productsReducer},
})

export type RootState = ReturnType<typeof productStore.getState>

export type AppDispatch = typeof productStore.dispatch