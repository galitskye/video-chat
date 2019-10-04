import styled from 'styled-components';
import { IRowProps, IColProps } from './types';
import {rem, calcCol, media, spacing} from '@theme/utils';

export const Container = styled.div`
    max-width: ${({theme}) => rem(theme.containerWidth)};
    margin: 0 auto;
    
    ${
        ({theme}) => spacing(theme, 'padding: 0 ')
    }
`;

export const Row = styled.div<IRowProps>`
    display: flex;
    
    ${
        ({theme, container}) => container && spacing(theme, 'margin: 0 -')
    }
    
    ${
        ({theme, styles}) => styles && styles(theme)
    }
`;

export const Col = styled.div<IColProps>`
    ${
        (props) => {
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
