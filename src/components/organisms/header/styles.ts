import styled from 'styled-components';
import { toRgba } from "@theme/utils";

export const rowStyles = () => (
    `
        align-items: center;
    `
);

export const StyledHeader = styled.header`
    ${
        ({theme}) => (
            `
                background-color: ${toRgba(theme.colors.blue, .4)}
            `
        )
    }
`;
