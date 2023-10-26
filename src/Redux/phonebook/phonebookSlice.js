import { createSlice } from '@reduxjs/toolkit';
import phonebookOperations  from './phonebookOperations';


const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  alert('An error occurred during the operation!!! Please reload the page!!!');
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    // GET reducers
    [phonebookOperations.getContacts.pending]: handlePending,
    [phonebookOperations.getContacts.rejected]: handleRejected,
    [phonebookOperations.getContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    // POST reducers
    [phonebookOperations.addContacts.pending]: handlePending,
    [phonebookOperations.addContacts.rejected]: handleRejected,
    [phonebookOperations.addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    // DELETE reducers
    [phonebookOperations.deleteContacts.pending]: handlePending,
    [phonebookOperations.deleteContacts.rejected]: handleRejected,
    [phonebookOperations.deleteContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { setFilter } = phonebookSlice.actions;

export default phonebookSlice.reducer;
