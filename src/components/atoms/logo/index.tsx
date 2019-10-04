import React, { FC } from 'react';
import { StyledLogo } from './styles';
import logo from '@images/logo.png';

const Logo: FC = () => (
    <StyledLogo>
        <img src={ logo } alt="Logo"/>
    </StyledLogo>
);

export default Logo;
