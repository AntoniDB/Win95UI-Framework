import type { HTMLAttributes, ReactNode } from 'react';

export interface WindowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  /** small icon rendered at the left of the titlebar */
  icon?: ReactNode;
  active?: boolean;
  /** show [-] [square] [X] buttons */
  minimizable?: boolean;
  maximizable?: boolean;
  closable?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  /** allow dragging by the titlebar */
  draggable95?: boolean;
  width?: number | string;
  height?: number | string;
}
