import {IThemeStyles} from '@src/theme';

export type TSpacing = (theme: IThemeStyles, space: string) => string;

export type THexToRgb = {
    [key: string]: number;
} | null;
