import { forwardRef } from 'react';
import { cx } from '../../utils';
import { statusBarClasses as c } from './StatusBar.styles';
import type { StatusBarProps } from './StatusBar.types';

export const StatusBar = forwardRef<HTMLDivElement, StatusBarProps>(function StatusBar(
  { panels, className, children, ...rest },
  ref
) {
  return (
    <div ref={ref} role="status" className={cx(c.root, className)} {...rest}>
      {panels
        ? panels.map((p, i) => (
            <span key={i} className={c.panel}>
              {p}
            </span>
          ))
        : children}
    </div>
  );
});
