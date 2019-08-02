import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    line-height: 2em;
    border: 1px solid ${({theme}) => theme.colors.grey40};
`;
