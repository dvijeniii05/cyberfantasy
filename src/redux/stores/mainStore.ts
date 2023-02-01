import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../slices/productsSlice';
import skinTypeSlice from '../slices/skinTypeSlice';
import testsReducer from '../slices/testsSlice';

const createDebugger = require('redux-flipper').default;

export const productStore = configureStore({
  reducer: {productsReducer, skinTypeSlice, testsReducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createDebugger()),
});

export type RootState = ReturnType<typeof productStore.getState>;

export type AppDispatch = typeof productStore.dispatch;
