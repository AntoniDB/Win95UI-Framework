import type { HTMLAttributes } from 'react';
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    /** 0..100 */
    value: number;
    /** show percentage label */
    showLabel?: boolean;
    width?: number | string;
}
