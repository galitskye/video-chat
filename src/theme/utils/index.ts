import {IThemeStyles} from '@theme/types';
import {TSpacing} from './types';

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
