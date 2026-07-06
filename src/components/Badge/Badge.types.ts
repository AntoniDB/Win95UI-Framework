import type { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'raised' | 'sunken';
  onDelete?: () => void;
}
