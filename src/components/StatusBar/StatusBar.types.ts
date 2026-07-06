import type { HTMLAttributes, ReactNode } from 'react';
export interface StatusBarProps extends HTMLAttributes<HTMLDivElement> {
  /** panels rendered as sunken cells; alternative to children */
  panels?: ReactNode[];
}
