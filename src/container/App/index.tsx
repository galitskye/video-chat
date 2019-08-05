import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { theme, GlobalStyles } from '@theme/index.ts';
import Layout from '@templates/layout';
import Home from '@pages/home';
import Contacts from '@pages/contacts';

const App: FC = (): JSX.Element => (
    <ThemeProvider theme={ theme }>
        <Router>
            <Layout>
                <GlobalStyles />
                <Route exact path="/" component={ Home } />
                <Route path="/contacts" component={ Contacts } />
            </Layout>
        </Router>
    </ThemeProvider>
);

export default hot(App);
