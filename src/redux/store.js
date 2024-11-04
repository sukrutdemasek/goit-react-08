import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import storage from "redux-persist/lib/storage";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
export const persistor = persistStore(store);
