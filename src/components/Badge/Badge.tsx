import { forwardRef } from 'react';
import { cx } from '../../utils';
import { badgeClasses as c } from './Badge.styles';
import type { BadgeProps } from './Badge.types';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { variant = 'raised', onDelete, className, children, ...rest },
  ref
) {
  return (
    <span ref={ref} className={cx(c.root, variant === 'sunken' && c.sunken, className)} {...rest}>
      {children}
      {onDelete && (
        <button type="button" className={c.delete} aria-label="Remove" onClick={onDelete}>
          x
        </button>
      )}
    </span>
  );
});
