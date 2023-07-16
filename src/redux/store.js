import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const rootReducer = combineReducers({
    token: tokenReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        },
      }),
});

export const persistor = persistStore(store);

export default store;