import React, { FC } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

import Logo from '@atoms/logo';
import { Row } from '@theme/grid';

const Header: FC = (): JSX.Element => (
    <header>
        <Row hEnd>
            <span>123123123</span>
        </Row>
        <Logo />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    </header>
);

export default Header;
