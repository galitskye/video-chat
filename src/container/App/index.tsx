import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { theme, GlobalStyles } from '@theme/index.ts';
import Layout from '@templates/layout';
import Home from '@pages/home';
import Contacts from '@pages/contacts';

const App: FC = (): JSX.Element => (
    <ThemeProvider theme={ theme }>
        <BrowserRouter>
            <Layout>
                <GlobalStyles />
                <Route exact path="/" component={ Home } />
                <Route path="/contacts" component={ Contacts } />
            </Layout>
        </BrowserRouter>
    </ThemeProvider>
);

export default hot(App);
