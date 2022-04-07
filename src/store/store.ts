import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/CategorySlice';
import transactionReducer from './reducers/TransactionSlice';
import userReducer from './reducers/UserSlice';

const rootReducer = combineReducers({
    userReducer,
    transactionReducer,
    categoryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
