import { configureStore } from "@reduxjs/toolkit";
import contestantState from "./reducers/contestantState";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contestantState);

const store = configureStore({
  reducer: {
    contestant: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);

export { store, persistor };
