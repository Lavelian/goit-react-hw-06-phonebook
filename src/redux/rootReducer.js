import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './Contacts/contactsReducer';
import filterReducer from './Filter/filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
