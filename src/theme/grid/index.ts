import { HTMLProps } from 'react';
import styled, { StyledFunction } from 'styled-components';
import { IRow, ICol } from './types';
import {rem, calcCol, media, spacing} from '@theme/utils';

export const Container = styled.div`
    max-width: ${({theme}) => rem(theme.containerWidth)};
    margin: 0 auto;
    
    ${
        ({theme}) => spacing(theme, 'padding: 0 ')
    }
`;

const row: StyledFunction<IRow & HTMLProps<HTMLDivElement>> = styled.div;

export const Row = row`
    display: flex;
    
    ${
        ({theme, container}) => container && spacing(theme, 'margin: 0 -')
    }
    
    ${
        ({theme, styles}) => styles && styles(theme)
    }
`;

export const Col = styled.div`
    ${
        (props: ICol) => {
            const { theme } = props;
            let styles: string = '';
            
            props.theme.breakpointsShort.forEach((point: string) => {
                const pointValue: number = Number(props[point]);
                let pointStyles: string = `${theme.spacings[point] && `padding: 0 ${rem(theme.spacings[point])}` || ''}`;
                
                pointStyles = `
                    ${pointStyles}
                    ${ pointValue && `width: ${calcCol(pointValue)}` || ''};
                `;

                styles = `
                    ${styles}
                    ${media(theme, point, pointStyles)}
                `;
            });
            
            return styles;
        }
    }
`;
