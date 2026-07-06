import type { HTMLAttributes, ReactNode } from 'react';

export interface TaskbarProps extends HTMLAttributes<HTMLDivElement> {
  /** content of the Start button */
  startLabel?: ReactNode;
  /** whether the Start button renders pressed */
  startActive?: boolean;
  onStartClick?: () => void;
  /** show live clock at the right */
  showClock?: boolean;
  /** fix to the bottom of the viewport */
  fixed?: boolean;
}
