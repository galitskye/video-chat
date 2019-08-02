import React, { FC } from 'react';
import { IProps } from './types';
import { StyledInput } from './styles';

const Input: FC<IProps> = ({ type, placeholder = '' }) => (
    <StyledInput type={ type } placeholder={ placeholder }/>
);

export default Input;