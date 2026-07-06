import type { InputHTMLAttributes } from 'react';
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    onLabel?: string;
    offLabel?: string;
}
