import { createSlice } from '@reduxjs/toolkit';
import { ITransaction } from '../../models/ITransaction';

interface TransactionState {
    transactions: ITransaction[];
    isLoading: boolean;
    error: string | null;
}

const initialState: TransactionState = {
    transactions: [],
    isLoading: false,
    error: null,
};

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default transactionSlice.reducer;
