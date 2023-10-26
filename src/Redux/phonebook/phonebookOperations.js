import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsFetchAPI';

const getContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await API.fetchContacts({ action: 'GET', item: null });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const response = await API.fetchContacts({
        action: 'POST',
        item: newContact,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('ERROR');
    }
  }
);

const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const response = await API.fetchContacts({ action: 'DELETE', item: id });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('ERROR');
    }
  }
);

const phonebookOperations = { getContacts, addContacts, deleteContacts };
export default phonebookOperations;

