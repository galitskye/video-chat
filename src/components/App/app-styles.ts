import styled, { css } from 'styled-components';

interface TitleProps {
    large?: boolean;
}

export const Title = styled.h1`
    color: red;
    text-align: center;
    
    ${(props: TitleProps) => props.large && css`font-size: 80px;`}
`;
