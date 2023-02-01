import {createSlice} from '@reduxjs/toolkit';

interface UserAnsweProps {
  userAnswers: Array<any>;
  error: null | 'string';
}

const initialState: UserAnsweProps = {
  userAnswers: [],
  error: null,
};

const testsSlice = createSlice({
  name: 'userAnswers',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      state.userAnswers.push(action.payload);
    },
  },
});

export const {addAnswer} = testsSlice.actions;
export default testsSlice.reducer;
