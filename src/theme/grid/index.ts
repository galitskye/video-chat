import styled from 'styled-components';
import { IRow } from './types';

export const Row = styled.div`
    width: 100%;
    display: flex;
    ${
        (props: IRow) => (
            props.middle && 'align-items: center;' ||
            props.center &&  'justify-content: center;' ||
            props.vEnd && 'align-items: flex-end;' ||
            props.hEnd && 'justify-content: flex-end;'
        )
    }
`;
