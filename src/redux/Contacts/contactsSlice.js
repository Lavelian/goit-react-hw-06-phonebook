import { createSlice } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: [],
  // Объект редюсеров
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

// Генераторы экшенов
export const { addContact, removeContact } = contactsSlice.actions;
// Редюсер слайса
const contactReducer = contactsSlice.reducer;
export default contactReducer;
