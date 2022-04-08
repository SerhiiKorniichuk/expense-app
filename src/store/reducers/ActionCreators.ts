import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import crypto from 'crypto-js';
import { ICategory } from 'models/ICategory';
import { IUser } from 'models/IUser';
import { AppDispatch } from 'store/store';
import { categorySlice } from './CategorySlice';
import { transactionSlice } from './TransactionSlice';

//actions with authSlice
export const authorizationUserByNameAndPassword = createAsyncThunk(
    'user/authUserByPassword',
    async (
        { username, password }: { username: string; password: string },
        thunkAPI
    ) => {
        try {
            const response = await axios.get(`/mocks/users.json`);
            const user = response.data.users.find(
                (user: IUser) => user.username === username
            );
            const bytes = crypto.AES.decrypt(user.password, 'secret_key');
            const decryptedPassword = bytes.toString(crypto.enc.Utf8);
            if (decryptedPassword === password) {
                localStorage.setItem('token', user.token);
                return user.id;
            }
            return null;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не вдалося знайти користувача');
        }
    }
);

export const authorizationUserByToken = createAsyncThunk(
    'user/fetchByToken',
    async (token: string, thunkAPI) => {
        try {
            const response = await axios.get(`mocks/users.json`);
            const user = response.data.users.find(
                (user: IUser) => user.token == token
            );
            if (user) return user.id;
            return null;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не вдалося знайти користувача');
        }
    }
);

//actions with categorySlice
export const initializationCategories =
    (idUser: number) => (dispatch: AppDispatch) => {
        let masCategories: ICategory[];
        const localCategories = localStorage.getItem(`categories_${idUser}`);
        if (localCategories) {
            masCategories = JSON.parse(localCategories);
        } else {
            masCategories = [
                {
                    id: 1,
                    label: 'зарплатня',
                },
                {
                    id: 2,
                    label: 'подарунки',
                },
                {
                    id: 3,
                    label: 'подорож',
                },
            ];
            localStorage.setItem(
                `categories_${idUser}`,
                JSON.stringify(masCategories)
            );
        }
        dispatch(categorySlice.actions.initialCategory(masCategories));
    };

export const addCategory =
    ({ idUser, newCategory }: { idUser: number; newCategory: ICategory }) =>
    (dispatch: AppDispatch) => {
        let masCategories: ICategory[] = [];
        const localCategories = localStorage.getItem(`categories_${idUser}`);
        if (localCategories) {
            masCategories = JSON.parse(localCategories);
        }
        masCategories = [...masCategories, newCategory];
        localStorage.setItem(
            `categories_${idUser}`,
            JSON.stringify(masCategories)
        );
        dispatch(categorySlice.actions.addCategory(newCategory));
    };

//actions with transactionSlice
export const initializationTransactions =
    (idUser: number) => (dispatch: AppDispatch) => {
        const localTransactions = localStorage.getItem(
            `transactions_${idUser}`
        );
        if (localTransactions) {
            const masTransactions = JSON.parse(localTransactions);
            dispatch(
                transactionSlice.actions.initialTransaction(masTransactions)
            );
        }
    };
