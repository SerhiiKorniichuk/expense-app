import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from 'models/ICategory';

interface CategoryState {
    categories: ICategory[];
    actualCategory: number;
    isLoading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categories: [],
    actualCategory: -1,
    isLoading: false,
    error: null,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default categorySlice.reducer;
