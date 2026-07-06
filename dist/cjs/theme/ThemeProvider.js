"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
exports.ThemeProvider = ThemeProvider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const theme_1 = require("./theme");
exports.ThemeContext = (0, react_1.createContext)(theme_1.defaultTheme);
function ThemeProvider({ theme, children, className, style }) {
    const merged = (0, react_1.useMemo)(() => (0, theme_1.mergeTheme)(theme), [theme]);
    const vars = (0, react_1.useMemo)(() => (0, theme_1.themeToCssVars)(merged), [merged]);
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: merged, children: (0, jsx_runtime_1.jsx)("div", { className: ['w95-root', className].filter(Boolean).join(' '), style: { ...vars, ...style }, children: children }) }));
}
