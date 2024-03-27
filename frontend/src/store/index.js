// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from './userSlice';
// import storage from 'redux-persist/lib/storage'
// import persistReducer from "redux-persist/es/persistReducer";
// import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
// import persistStore from "redux-persist/es/persistStore";

// const rootReducer = combineReducers({
//   user: userReducer,
// })

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   // middleware: getDefaultMiddleware => getDefaultMiddleware({
//   //   serializableCheck: {
//   //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//   //   }
//   // })
// })

// export const persistor = persistStore(store);


import { configureStore } from '@reduxjs/toolkit';
import alertModalReducer from './alertModalSlice';

export default configureStore({
  reducer: {
    alertModal: alertModalReducer
  }
})