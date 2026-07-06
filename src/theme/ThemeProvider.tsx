import { createContext, useMemo } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { defaultTheme, mergeTheme, themeToCssVars } from './theme';
import type { Win95Theme, Win95ThemeOverride } from './theme';

export const ThemeContext = createContext<Win95Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Win95ThemeOverride;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ThemeProvider({ theme, children, className, style }: ThemeProviderProps) {
  const merged = useMemo(() => mergeTheme(theme), [theme]);
  const vars = useMemo(() => themeToCssVars(merged), [merged]);
  return (
    <ThemeContext.Provider value={merged}>
      <div
        className={['w95-root', className].filter(Boolean).join(' ')}
        style={{ ...(vars as CSSProperties), ...style }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
