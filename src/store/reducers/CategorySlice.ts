import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from 'models/ICategory';

interface CategoryState {
    categories: ICategory[];
    actualCategory: number;
}

const initialState: CategoryState = {
    categories: [],
    actualCategory: -1,
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        initialCategory(state, action: PayloadAction<ICategory[]>) {
            state.categories = action.payload;
            state.actualCategory = 0;
        },
        changeActualCategory(state, action: PayloadAction<number>) {
            state.actualCategory = action.payload;
        },
    },
});

export default categorySlice.reducer;
