import { Box } from '@mui/material';
import FormAddCategory from 'components/FormAddCategory';
import FormAddTransaction from 'components/FormAddTransaction';
import ListCategories from 'components/ListCategories';
import ListTransactions from 'components/ListTransactions';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import {
    initializationCategories,
    initializationTransactions,
} from 'store/reducers/ActionCreators';
import { authSelector } from 'store/reducers/AuthSlice';

const Main = () => {
    const dispatch = useAppDispatch();
    const { idUser } = useAppSelector(authSelector);

    useEffect(() => {
        if (idUser) {
            dispatch(initializationCategories(idUser));
            dispatch(initializationTransactions(idUser));
        }
    }, [dispatch, idUser]);

    return (
        <Box
            sx={{
                display: 'flex',
                padding: '3%',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box sx={{ margin: '10px' }}>
                <ListCategories />
                <FormAddCategory />
            </Box>
            <Box sx={{ width: '100%', margin: '10px' }}>
                <FormAddTransaction />
                <ListTransactions />
            </Box>
        </Box>
    );
};

export default Main;
