import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { defaultItem } from 'utils/DefaultItem';

const myContactSlice = createSlice({
  name: 'contacts',
  initialState: defaultItem,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, remove } = myContactSlice.actions;

const myFilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactFilter(state, action) {
      return {
        state,
        filter: action.payload,
      };
    },
  },
});
export const { contactFilter } = myFilterSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: myContactSlice.reducer,
    filter: myFilterSlice.reducer,
  },
});
