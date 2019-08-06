export interface IThemeStyles {
    breakpointsShort: string[];
    breakpoints: {
        [key: string]: number;
    };
    containerWidth: number;
    spacings: {
        [key: string]: number;
    };
    fontSizes: string[];
    space: string[];
    colors: { [key: string]: string };
    secondaryColors: { [key: string]: string };
}
