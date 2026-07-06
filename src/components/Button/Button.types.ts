import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'default' | 'active' | 'disabled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'active' renders the pressed 3D state; 'disabled' is equivalent to disabled={true} */
  variant?: ButtonVariant;
  /** Renders the bold border of a default dialog button */
  primary?: boolean;
  fullWidth?: boolean;
}
