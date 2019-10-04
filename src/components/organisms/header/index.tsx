import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@atoms/logo';
import { Container, Row, Col } from '@theme/grid';
import {
    StyledHeader,
    rowStyles
} from './styles';

const Header: FC = (): JSX.Element => (
    <StyledHeader>
        <Container>
            <Row styles={rowStyles}>
                <Col>
                    <Logo />
                </Col>
                <Col>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </StyledHeader>
);

export default Header;
