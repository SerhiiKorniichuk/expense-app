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
        dispatch(initializationCategories(idUser));
        dispatch(initializationTransactions(idUser));
    }, []);
    return <div>Main</div>;
};

export default Main;
