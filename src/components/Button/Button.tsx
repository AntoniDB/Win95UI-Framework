import { forwardRef } from 'react';
import { cx } from '../../utils';
import { buttonClasses as c } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'default', primary = false, fullWidth = false, className, disabled, children, ...rest },
  ref
) {
  const isDisabled = disabled || variant === 'disabled';
  return (
    <button
      ref={ref}
      type="button"
      disabled={isDisabled}
      className={cx(
        c.root,
        'w95-focusable',
        variant === 'active' && c.active,
        primary && c.primary,
        fullWidth && c.fullWidth,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
