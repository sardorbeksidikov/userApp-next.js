import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: userReducer,
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
