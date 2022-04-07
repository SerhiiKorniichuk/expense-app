import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITransaction } from '../../models/ITransaction';

interface TransactionState {
    transactions: ITransaction[];
}

const initialState: TransactionState = {
    transactions: [],
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        initialTransaction(state, action: PayloadAction<ITransaction[]>) {
            state.transactions = action.payload;
        },
    },
    extraReducers: {},
});

export default transactionSlice.reducer;
