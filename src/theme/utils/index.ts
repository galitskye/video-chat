import {IThemeStyles} from '@theme/types';
import {TSpacing, THexToRgb} from './types';

export const rem = (width: number, difference: number = 0): string => (
    `${(Number(width) + difference) / 16}rem`
);

export const calcCol = (columnsCount: number): string => (
    `${(100 / 12) * Number(columnsCount)}%`
);

export const spacing: TSpacing = (theme, space): string => {
    let containerSpaces: string = '';

    theme.breakpointsShort.forEach((point: string) => {
        const spacing: number = theme.spacings[point];

        if (spacing) {
            containerSpaces = `
                ${containerSpaces}
                ${media(theme, point, `${space}${rem(theme.spacings[point])}`)}
            `;
        }
    });

    return containerSpaces;
};

export const media = (theme: IThemeStyles, point: string, styles: string): string => {
    if (point === 'xs') {
        return styles;
    }

    return `
        @media screen and (min-width: ${rem(theme.breakpoints[point], 1)}) {
            ${styles}
        }
    `
};

export const hexToRgb = (hex: string): THexToRgb => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

export const toRgba = (color: string, opacity: number): string => {
    const colorInRgb: THexToRgb = hexToRgb(color);

    return colorInRgb ?
        `rgba(${colorInRgb.r},${colorInRgb.g},${colorInRgb.b},${opacity})` : color;
};
