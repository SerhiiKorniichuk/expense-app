import Navbar from 'components/Navbar';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GRAPHICS_SCREEN, MAIN_SCREEN } from 'routes';
import Graphics from './Graphics';
import Main from './Main';

export const HomePage = () => {
    console.log('homepage');
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={MAIN_SCREEN} element={<Main />} />
                <Route path={GRAPHICS_SCREEN} element={<Graphics />} />
                <Route path="*" element={<Navigate to={MAIN_SCREEN} />} />
            </Routes>
        </>
    );
};
