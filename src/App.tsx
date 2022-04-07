import { AuthPage } from 'pages/AuthPage';
import { HomePage } from 'pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AUTH_PAGE } from 'routes';
import { HistoryRouter } from 'routes/components/HistoryRouter';
import { PrivateRouter } from 'routes/components/PrivateRouter';
import { PublicRouter } from 'routes/components/PublicRouter';
import { history } from 'routes/helpers/history';

function App() {
    return (
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
    );
}

export default App;
