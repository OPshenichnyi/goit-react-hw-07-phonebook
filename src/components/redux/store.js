
import { persistReducerContacts } from "./contactSlice";
import { fillterReducer } from "./filterSlice";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const { configureStore } = require("@reduxjs/toolkit");



export const store = configureStore({
    reducer: {
        contacts: persistReducerContacts,
        fillter: fillterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]   
            },
        }),
    
})

export const persistor = persistStore(store)
