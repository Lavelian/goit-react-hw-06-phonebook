import { createSlice } from '@reduxjs/toolkit';
const filtersSlice = createSlice({
  // Имя слайса
  name: 'filter',
  // Начальное состояние редюсера слайса
  initialState: '',
  // Объект редюсеров
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
