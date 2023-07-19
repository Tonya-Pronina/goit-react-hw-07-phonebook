// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   contacts: [],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });


// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [fetchContacts.pending]: store => {
//       store.loading = true;
//     },
//     [fetchContacts.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = payload;
//     },
//     [fetchContacts.rejected]: (store, { payload }) => {
//       store.loading = true;
//       store.error = payload;
//     },
//     [addContact.pending]: store => {
//       store.loading = true;
//     },
//     [addContact.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items.push(payload);
//       console.log(payload);
//     },
//     [addContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//     [deleteContact.pending]: store => {
//       store.loading = true;
//     },
//     [deleteContact.fulfilled]: (store, { payload }) => {
//       store.loading = false;
//       store.items = store.items.filter(item => item.id !== payload);
//     },
//     [deleteContact.rejected]: (store, { payload }) => {
//       store.loading = false;
//       store.error = payload;
//     },
//   },
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = true;
        store.error = payload;
      })
      .addCase(addContact.pending, store => {
        store.loading = true;
      })
      .addCase(addContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts.push(payload);
        console.log(payload);
      })
      .addCase(addContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(deleteContact.pending, store => {
        store.loading = true;
      })
      .addCase(deleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts = store.contacts.filter(contact => contact.id !== payload);
      })
      .addCase(deleteContact.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;