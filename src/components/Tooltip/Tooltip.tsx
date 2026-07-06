import { forwardRef, useId, useState } from 'react';
import { cx } from '../../utils';
import { tooltipClasses as c } from './Tooltip.styles';
import type { TooltipProps } from './Tooltip.types';

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(function Tooltip(
  { content, children, placement = 'bottom', className, ...rest },
  ref
) {
  const [visible, setVisible] = useState(false);
  const id = useId();
  return (
    <span
      ref={ref}
      className={cx(c.root, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      aria-describedby={visible ? id : undefined}
      {...rest}
    >
      {children}
      {visible && (
        <span id={id} role="tooltip" className={cx(c.bubble, placement === 'top' ? c.top : c.bottom)}>
          {content}
        </span>
      )}
    </span>
  );
});
