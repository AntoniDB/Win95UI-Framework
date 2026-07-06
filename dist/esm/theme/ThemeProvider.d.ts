import type { CSSProperties, ReactNode } from 'react';
import type { Win95Theme, Win95ThemeOverride } from './theme';
export declare const ThemeContext: import("react").Context<Win95Theme>;
export interface ThemeProviderProps {
    theme?: Win95ThemeOverride;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export declare function ThemeProvider({ theme, children, className, style }: ThemeProviderProps): import("react").JSX.Element;
