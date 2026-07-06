import type { Win95Colors, Win95Typography, Win95Spacing } from '../tokens';
export interface Win95Theme {
    colors: Win95Colors;
    typography: Win95Typography;
    spacing: Win95Spacing;
}
export declare const defaultTheme: Win95Theme;
type DeepPartial<T> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};
export type Win95ThemeOverride = DeepPartial<Win95Theme>;
export declare function mergeTheme(override?: Win95ThemeOverride): Win95Theme;
/** Converts a theme into the CSS custom properties consumed by styles.css */
export declare function themeToCssVars(theme: Win95Theme): Record<string, string>;
export {};
