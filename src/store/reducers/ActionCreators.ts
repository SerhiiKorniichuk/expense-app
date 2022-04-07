import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import crypto from 'crypto-js';
import { IUser } from 'models/IUser';

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
            return 0;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не вдалося знайти користувача');
        }
    }
);
