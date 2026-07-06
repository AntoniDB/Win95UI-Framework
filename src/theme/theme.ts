import { colors, typography, spacing } from '../tokens';
import type { Win95Colors, Win95Typography, Win95Spacing } from '../tokens';

export interface Win95Theme {
  colors: Win95Colors;
  typography: Win95Typography;
  spacing: Win95Spacing;
}

export const defaultTheme: Win95Theme = { colors, typography, spacing };

type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };
export type Win95ThemeOverride = DeepPartial<Win95Theme>;

export function mergeTheme(override?: Win95ThemeOverride): Win95Theme {
  if (!override) return defaultTheme;
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
    } as Win95Typography,
    spacing: { ...defaultTheme.spacing, ...(override.spacing ?? {}) },
  };
}

/** Converts a theme into the CSS custom properties consumed by styles.css */
export function themeToCssVars(theme: Win95Theme): Record<string, string> {
  const vars: Record<string, string> = {};
  for (const [k, v] of Object.entries(theme.colors)) {
    vars[`--w95-${k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`] = v;
  }
  vars['--w95-font-family'] = theme.typography.fontFamily;
  vars['--w95-font-sm'] = theme.typography.fontSize.sm;
  vars['--w95-font-md'] = theme.typography.fontSize.md;
  vars['--w95-font-lg'] = theme.typography.fontSize.lg;
  return vars;
}
