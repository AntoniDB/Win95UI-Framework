import type { ReactNode } from 'react';

export type MessageBoxIcon = 'info' | 'warning' | 'error' | 'question';

export interface MessageBoxProps {
  open: boolean;
  title: string;
  children?: ReactNode;
  icon?: MessageBoxIcon;
  /** button labels; each fires onAction(label) */
  buttons?: string[];
  onAction?: (label: string) => void;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
