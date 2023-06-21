import { configureStore, combineReducers } from '@reduxjs/toolkit';
import homeSliceReducer from './features/homeSlice';
import { fetchData } from './features/fetchQuerySlice';

const reducers = combineReducers({
  home: homeSliceReducer,
  [fetchData.reducerPath]: fetchData.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(fetchData.middleware),
});

export default store;
