import Navbar from 'components/Navbar';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AUTH_PAGE, LOGIN_SCREEN } from 'routes';
import LogIn from './LogIn';

export const AuthPage = () => {
    console.log('authpage');
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={LOGIN_SCREEN} element={<LogIn />} />
                <Route
                    path="*"
                    element={<Navigate to={AUTH_PAGE + LOGIN_SCREEN} />}
                />
            </Routes>
        </>
    );
};
