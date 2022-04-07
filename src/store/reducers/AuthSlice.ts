import {
    createDraftSafeSelector,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { authorizationUserByNameAndPassword } from './ActionCreators';

interface AuthState {
    idUser: number;
}

const initialState: AuthState = {
    idUser: 0,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearUser(state) {
            state.idUser = 0;
        },
    },
    extraReducers: {
        [authorizationUserByNameAndPassword.fulfilled.type]: (
            state,
            action: PayloadAction<number>
        ) => {
            state.idUser = action.payload;
        },
    },
});

const rootState = (state: RootState) => state.authReducer;
export const authSelector = createDraftSafeSelector(rootState, (state) => {
    return state;
});

export default authSlice.reducer;
