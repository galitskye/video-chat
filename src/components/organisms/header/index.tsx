import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '@atoms/logo';
import { Container, Row, Col } from '@theme/grid';

const Header: FC = (): JSX.Element => (
    <header>
        <Container>
            <Row container>
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
    </header>
);

export default Header;
