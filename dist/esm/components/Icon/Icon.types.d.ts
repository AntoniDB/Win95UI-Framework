import type { HTMLAttributes, ReactNode } from 'react';
export interface IconProps extends HTMLAttributes<HTMLDivElement> {
    /** 32x32 image or SVG */
    image: ReactNode;
    label?: string;
    selected?: boolean;
    /** white label on desktop-teal backgrounds */
    onDesktop?: boolean;
}
