import { contactsReducer,  } from "./contactSlice";
import { fillterReducer } from "./filterSlice";


const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        fillter: fillterReducer
    }

})


