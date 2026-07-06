import type { HTMLAttributes, ReactNode } from 'react';
export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
    content: ReactNode;
    children: ReactNode;
    /** placement relative to the wrapped element */
    placement?: 'top' | 'bottom';
}
