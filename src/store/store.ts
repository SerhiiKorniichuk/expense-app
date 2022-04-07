import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';
import categoryReducer from './reducers/CategorySlice';
import transactionReducer from './reducers/TransactionSlice';

const rootReducer = combineReducers({
    authReducer,
    transactionReducer,
    categoryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
