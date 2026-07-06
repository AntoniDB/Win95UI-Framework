import { forwardRef } from 'react';
import { cx } from '../../utils';
import { iconClasses as c } from './Icon.styles';
import type { IconProps } from './Icon.types';

export const Icon = forwardRef<HTMLDivElement, IconProps>(function Icon(
  { image, label, selected = false, onDesktop = false, className, ...rest },
  ref
) {
  return (
    <div ref={ref} tabIndex={0} className={cx(c.root, onDesktop && c.onDesktop, className)} {...rest}>
      <span className={c.image} aria-hidden="true">{image}</span>
      {label && <span className={cx(c.label, selected && c.labelSelected)}>{label}</span>}
    </div>
  );
});
