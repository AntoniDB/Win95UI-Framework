"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = useTheme;
const react_1 = require("react");
const ThemeProvider_1 = require("./ThemeProvider");
function useTheme() {
    return (0, react_1.useContext)(ThemeProvider_1.ThemeContext);
}
