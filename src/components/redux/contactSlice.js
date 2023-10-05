import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'contacts',
    initialState: {
        contacts:[],
    },
    reducers: {
        addContacts(state, action) {
            state.contacts.push(action.payload)
        },
        removeContact(state, action) {
            state.contacts.splice(action.payload, 1);
        }
    }
})
export const contactsReducer = slice.reducer
export const { addContacts, removeContact } = slice.actions

const persistConfig = {
    key: 'root',
    storage,
}

export const persistReducerContacts = persistReducer(persistConfig, contactsReducer)


