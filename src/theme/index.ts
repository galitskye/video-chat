import { IThemeStyles } from './types';

const colors = {
    blue: '#2179ee',
    green: '#00cc9a',
    coral: '#ff6759',
    gold: '#f0b95b',
    purple: '#7537ef',
    white: '#ffffff',
    black: '#000000',

    grey10: '#f3f4f8',
    grey20: '#e1e5eb',
    grey30: '#c2c6cc',
    grey40: '#9ea2a8',
    grey50: '#686c73',
    grey60: '#30363d'
};

const secondaryColors = {
    blue10: '#ade7ff',
    blue20: '#61bcff',
    blue30: '#2179ee',
    blue40: '#1f4ab4',
    blue50: '#1d2064',
    coral10: '#ffc6b3',
    coral20: '#ff8e75',
    coral30: '#ff6759',
    coral40: '#eb312a',
    coral50: '#7b1e30'
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '2.8rem', '3.2rem', '4.0rem', '4.8rem', '6.4rem'];
const space = ['0', '.4rem', '.8rem', '1.2rem', '1.6rem', '2.0rem', '3.2rem', '4.8rem', '6.4rem', '9.6rem'];

const theme: IThemeStyles = {
    breakpoints,
    fontSizes,
    space,
    colors,
    secondaryColors
};

export { theme, IThemeStyles };
