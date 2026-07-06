import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import type { Win95Theme } from './theme';

export function useTheme(): Win95Theme {
  return useContext(ThemeContext);
}
