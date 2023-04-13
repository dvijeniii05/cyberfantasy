import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlice';
import skinTypeReducer from '../slices/skinTypeSlice';
import testsReducer from '../slices/testsSlice';
import {apiSlice} from '../slices/apiSlice';

const createDebugger = require('redux-flipper').default;

export const productStore = configureStore({
  reducer: {
    productsReducer,
    skinTypeReducer,
    testsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createDebugger(), apiSlice.middleware),
});

export type RootState = ReturnType<typeof productStore.getState>;

export type AppDispatch = typeof productStore.dispatch;
