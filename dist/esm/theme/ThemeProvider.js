import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo } from 'react';
import { defaultTheme, mergeTheme, themeToCssVars } from './theme.js';
export const ThemeContext = createContext(defaultTheme);
export function ThemeProvider({ theme, children, className, style }) {
    const merged = useMemo(() => mergeTheme(theme), [theme]);
    const vars = useMemo(() => themeToCssVars(merged), [merged]);
    return (_jsx(ThemeContext.Provider, { value: merged, children: _jsx("div", { className: ['w95-root', className].filter(Boolean).join(' '), style: { ...vars, ...style }, children: children }) }));
}
