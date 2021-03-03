import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from '../counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
