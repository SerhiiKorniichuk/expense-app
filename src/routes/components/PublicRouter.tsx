import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MAIN_SCREEN } from 'routes';

interface PublicRouterProps {
    component: JSX.Element;
}

export const PublicRouter: React.FC<PublicRouterProps> = ({ component }) => {
    const token = localStorage.getItem('token');
    const location = useLocation();

    console.log('public route', token);

    if (token)
        return <Navigate replace to={MAIN_SCREEN} state={{ from: location }} />;

    return component;
};
