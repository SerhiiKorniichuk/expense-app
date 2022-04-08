import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { ICategory } from 'models/ICategory';
import { RootState } from 'store/store';

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
        },
        addCategory(state, action: PayloadAction<ICategory>) {
            state.categories = [...state.categories, action.payload];
        },
        changeActualCategory(state, action: PayloadAction<number>) {
            state.actualCategory = action.payload;
        },
        clearCategory(state) {
            state.categories = [];
            state.actualCategory = -1;
        },
    },
});

const rootState = (state: RootState) => state.categoryReducer;
export const categorySelector = createDraftSafeSelector(rootState, (state) => {
    return state;
});

export default categorySlice.reducer;
