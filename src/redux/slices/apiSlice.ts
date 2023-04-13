import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {DataProps} from './productsSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: (builder) => ({
    getProducts: builder.query<DataProps[], string[]>({
      query: (skinType) =>
        '/allProducts/' + encodeURIComponent(JSON.stringify(skinType)),
    }),
    getSingleProduct: builder.query<DataProps[], string>({
      query: (productUrl) => '/singleProduct/' + encodeURIComponent(productUrl),
    }),
  }),
});

export const {useGetProductsQuery, useGetSingleProductQuery} = apiSlice;
