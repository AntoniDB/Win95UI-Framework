import { forwardRef } from 'react';
import { cx } from '../../utils';
import { progressClasses as c } from './ProgressBar.styles';
import type { ProgressBarProps } from './ProgressBar.types';

const TOTAL_BLOCKS = 18;

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  { value, showLabel = false, width, className, style, ...rest },
  ref
) {
  const clamped = Math.max(0, Math.min(100, value));
  const filled = Math.round((clamped / 100) * TOTAL_BLOCKS);
  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      className={cx(c.root, className)}
      style={{ width, ...style }}
      {...rest}
    >
      <div className={c.blocks} aria-hidden="true">
        {Array.from({ length: TOTAL_BLOCKS }, (_, i) => (
          <span key={i} className={c.block} style={{ visibility: i < filled ? 'visible' : 'hidden' }} />
        ))}
      </div>
      {showLabel && <span className={c.label}>{clamped}%</span>}
    </div>
  );
});
