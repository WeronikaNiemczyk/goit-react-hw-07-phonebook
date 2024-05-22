import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { inputValue: '' };
const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.inputValue = action.payload;
    },
    prepare: inputValue => {
      return {
        payload: inputValue,
      };
    },
  },
});
export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
