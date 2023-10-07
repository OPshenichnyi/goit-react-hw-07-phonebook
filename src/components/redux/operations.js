import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = "https://651d429844e393af2d597656.mockapi.io";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {

        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (value, thunkAPI) => {
        console.log(value);
        try {
            const response = await axios.post("/contacts",  value );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);