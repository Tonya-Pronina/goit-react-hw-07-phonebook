import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../API';


export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await API.fetchContacts();
      
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const result = await API.addContact(contact);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

