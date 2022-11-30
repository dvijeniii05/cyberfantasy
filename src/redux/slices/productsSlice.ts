import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface ProductState {
  data: Array<DataProps>;
  status: string;
  error: null | string;
}

export interface DataProps {
  src: string;
  shortDesc: string;
  productUrl: string;
  ratingStars?: string;
  ratingVotes?: string;
  fullDesc?: HTMLElement;
}

export interface FullDescProps {
  fullDesc: HTMLElement;
  productUrl: string;
}

const initialState: ProductState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const response = await axios.get('http://localhost:3000/allProducts/');
  return response.data;
});

export const fetchSingleProduct = createAsyncThunk(
  'fetchSingleProduct',
  async (productUrl: string) => {
    console.log('FTECH_CALLED');
    const response = await axios.get(
      'http://localhost:3000/singleProduct/' + encodeURIComponent(productUrl)
    );
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'pending';
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload.filter(
          (el: DataProps) => el.shortDesc !== null
        );
        state.status = 'fulfilled';
      }),
      builder.addCase(fetchSingleProduct.pending, (state) => {
        state.status = 'pending';
      });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      console.log('REDUX_DATA', state.data, action.payload);
      const {fullDesc, productUrl} = action.payload;
      const newArr = state.data.map((obj) => {
        if (obj.productUrl === productUrl) {
          return {
            ...obj,
            fullDesc: fullDesc,
          };
        }
        // console.log('INSIDE_MAP',obj)
        return obj;
      });
      state.data = newArr;
      state.status = 'fulfilled';
    });
  },
});

export default productsSlice.reducer;
