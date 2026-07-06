"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
exports.mergeTheme = mergeTheme;
exports.themeToCssVars = themeToCssVars;
const tokens_1 = require("../tokens");
exports.defaultTheme = { colors: tokens_1.colors, typography: tokens_1.typography, spacing: tokens_1.spacing };
function mergeTheme(override) {
    if (!override)
        return exports.defaultTheme;
    return {
        colors: { ...exports.defaultTheme.colors, ...(override.colors ?? {}) },
        typography: {
            ...exports.defaultTheme.typography,
            ...(override.typography ?? {}),
            fontSize: {
                ...exports.defaultTheme.typography.fontSize,
                ...(override.typography?.fontSize ?? {}),
            },
            fontWeight: {
                ...exports.defaultTheme.typography.fontWeight,
                ...(override.typography?.fontWeight ?? {}),
            },
        },
        spacing: { ...exports.defaultTheme.spacing, ...(override.spacing ?? {}) },
    };
}
/** Converts a theme into the CSS custom properties consumed by styles.css */
function themeToCssVars(theme) {
    const vars = {};
    for (const [k, v] of Object.entries(theme.colors)) {
        vars[`--w95-${k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`] = v;
    }
    vars['--w95-font-family'] = theme.typography.fontFamily;
    vars['--w95-font-sm'] = theme.typography.fontSize.sm;
    vars['--w95-font-md'] = theme.typography.fontSize.md;
    vars['--w95-font-lg'] = theme.typography.fontSize.lg;
    return vars;
}
