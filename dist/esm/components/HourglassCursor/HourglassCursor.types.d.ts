import type { HTMLAttributes } from 'react';
export interface HourglassCursorProps extends HTMLAttributes<HTMLSpanElement> {
    /** pixel size of the hourglass */
    size?: number;
    label?: string;
}
