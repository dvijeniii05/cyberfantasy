import {createSlice} from '@reduxjs/toolkit';

interface SkinTypeProps {
  skinType: Array<string>;
  status: string;
  error: null | string;
}

const initialState: SkinTypeProps = {
  skinType: [],
  status: 'idle',
  error: null,
};

const skinTypeSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    addSkinType: (state, action) => {
      state.skinType.push(action.payload);
    },
    deleteSkinType: (state, action) => {
      const newState = state.skinType.filter((el) => el !== action.payload);
      state.skinType = newState;
    },
  },
});

export const {addSkinType, deleteSkinType} = skinTypeSlice.actions;
export default skinTypeSlice.reducer;
