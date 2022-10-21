import { createSlice } from '@reduxjs/toolkit';
const contactsSlice = createSlice({
  name: 'contacts',

  initialState: [],

  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

const contactReducer = contactsSlice.reducer;
export default contactReducer;
