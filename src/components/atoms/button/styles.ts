import styled from 'styled-components';
import { IThemeStyles } from '@theme';

const DefaultButtonStyles = (theme: IThemeStyles) => (`
    font-size: ${theme.fontSizes[0]};
    line-height: ${theme.fontSizes[2]};
    border: 2px solid ${theme.colors.green};
`);

export const StyledButton = styled.button`
    ${({theme}) => DefaultButtonStyles(theme)}
    color: ${({theme}) => theme.secondaryColors.blue50};
`;
