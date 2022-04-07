import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { IUser } from 'models/IUser';
import { RootState } from '../store';

interface UserState {
    user: IUser | null;
    isAuthorized: boolean;
}

const initialState: UserState = {
    user: null,
    isAuthorized: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser(state) {
            state.user = null;
        },
        changeAuthorized(state, action: PayloadAction<boolean>) {
            state.isAuthorized = action.payload;
        },
    },
    extraReducers: {},
});

const rootState = (state: RootState) => state.userReducer;
export const authSelector = createDraftSafeSelector(rootState, (state) => {
    return state;
});

export default userSlice.reducer;
