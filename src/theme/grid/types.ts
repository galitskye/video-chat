import {IThemeStyles} from '@theme/types';
import {ReactNode} from 'react';

export interface IRowProps {
    styles?: (theme: IThemeStyles) => string;
    container?: boolean;
}

export interface IColProps {
    [key: string]: number | IThemeStyles | undefined | ReactNode;
    theme: IThemeStyles;
    children?: ReactNode;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
