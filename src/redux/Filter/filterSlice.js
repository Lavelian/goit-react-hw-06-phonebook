import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

// Генераторы экшенов
export const { changeFilter } = filtersSlice.actions;
// Редюсер слайса
const filterReducer = filtersSlice.reducer;
export default filterReducer;
