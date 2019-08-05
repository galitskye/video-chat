import React, { FC } from 'react';
import Header from '@organisms/header';
import Footer from '@organisms/footer';
import { LayoutWrapper, Main } from './styles';

const Layout: FC = ({children}): JSX.Element => (
    <LayoutWrapper>
        <Header />

        <Main>
            { children }
        </Main>

        <Footer />
    </LayoutWrapper>
);

export default Layout;
