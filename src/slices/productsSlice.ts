import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ProductState {
    data: Array<any[]>,
    status: string,
    error: null | string
}

interface DataProps {
    desc: string,
    src: string
}

const initialState: ProductState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    const response = await axios.get('http://localhost:3000')
    return response.data 
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'pending'
        }),
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload.filter((el:DataProps) => el.desc !== null)
            state.status = 'fulfilled'
        })
    },
})

export default productsSlice.reducer