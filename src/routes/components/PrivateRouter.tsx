import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AUTH_PAGE } from 'routes';

interface PrivateRouterProps {
    component: JSX.Element;
}

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ component }) => {
    const token = localStorage.getItem('token');
    const location = useLocation();

    console.log('private route', token);

    if (!token)
        return <Navigate replace to={AUTH_PAGE} state={{ from: location }} />;

    return component;
};
