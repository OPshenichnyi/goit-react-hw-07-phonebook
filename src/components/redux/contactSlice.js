import { addContact, deleteContact, fetchContacts } from "./operations";
const { createSlice } = require("@reduxjs/toolkit");

const handleIsLoading = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {

        [fetchContacts.pending]: handleIsLoading,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },

        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handleIsLoading,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },

        [deleteContact.rejected]: handleRejected,
        [deleteContact.pending]: handleIsLoading,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,

    }

    }
)

export const contactsReducer = slice.reducer
export const { addContacts, removeContact } = slice.actions

