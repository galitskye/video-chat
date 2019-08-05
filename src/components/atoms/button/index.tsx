import React, { FC } from 'react';
import { StyledButton } from './styles';

const Button: FC = ({children}) => (
    <StyledButton>{ children }</StyledButton>
);

export default Button;
