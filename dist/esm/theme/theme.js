import { colors, typography, spacing } from '../tokens/index.js';
export const defaultTheme = { colors, typography, spacing };
export function mergeTheme(override) {
    if (!override)
        return defaultTheme;
    return {
        colors: { ...defaultTheme.colors, ...(override.colors ?? {}) },
        typography: {
            ...defaultTheme.typography,
            ...(override.typography ?? {}),
            fontSize: {
                ...defaultTheme.typography.fontSize,
                ...(override.typography?.fontSize ?? {}),
            },
            fontWeight: {
                ...defaultTheme.typography.fontWeight,
                ...(override.typography?.fontWeight ?? {}),
            },
        },
        spacing: { ...defaultTheme.spacing, ...(override.spacing ?? {}) },
    };
}
/** Converts a theme into the CSS custom properties consumed by styles.css */
export function themeToCssVars(theme) {
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
