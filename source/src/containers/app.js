// @packages
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// @scripts
import MasterPageContainer from './master-page';
import { store } from '../core';

const AppContainer = () =>
    (
        <React.Fragment>
            <CssBaseline />
            <Provider store={store}>
                <HashRouter>
                    <Route component={MasterPageContainer} />
                </HashRouter>
            </Provider>
        </React.Fragment>
    );

export default AppContainer;
