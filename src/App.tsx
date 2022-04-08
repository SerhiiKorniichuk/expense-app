import { ThemeProvider } from '@mui/material';
import { AuthPage } from 'pages/AuthPage';
import { HomePage } from 'pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AUTH_PAGE } from 'routes';
import { HistoryRouter } from 'routes/components/HistoryRouter';
import { PrivateRouter } from 'routes/components/PrivateRouter';
import { PublicRouter } from 'routes/components/PublicRouter';
import { history } from 'routes/helpers/history';
import './styles/App.css';
import theme from './styles/theme';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <HistoryRouter history={history}>
                <Routes>
                    <Route
                        path={`${AUTH_PAGE}/*`}
                        element={<PublicRouter component={<AuthPage />} />}
                    />
                    <Route
                        path="/*"
                        element={<PrivateRouter component={<HomePage />} />}
                    />
                </Routes>
            </HistoryRouter>
        </ThemeProvider>
    );
};

export default App;
