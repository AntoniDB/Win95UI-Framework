import { forwardRef } from 'react';
import { cx } from '../../utils';
import { hourglassClasses as c } from './HourglassCursor.styles';
import type { HourglassCursorProps } from './HourglassCursor.types';

export const HourglassCursor = forwardRef<HTMLSpanElement, HourglassCursorProps>(function HourglassCursor(
  { size = 22, label, className, ...rest },
  ref
) {
  return (
    <span ref={ref} role="status" aria-label={label ?? 'Working'} className={cx(c.root, className)} {...rest}>
      <span className={c.glyph} aria-hidden="true">
        <svg width={size} height={size} viewBox="0 0 13 16" style={{ shapeRendering: 'crispEdges' }}>
          <rect x="0" y="0" width="13" height="2" fill="#000000" />
          <rect x="0" y="14" width="13" height="2" fill="#000000" />
          <rect x="2" y="2" width="9" height="1" fill="#808080" />
          <path d="M2 3 L11 3 L11 5 L8 8 L11 11 L11 13 L2 13 L2 11 L5 8 L2 5 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="1" />
          <path d="M4 4 L9 4 L9 5 L6.5 7.5 L4 5 Z" fill="#00AEEF" />
          <path d="M4 12 L9 12 L9 11 L6.5 9.5 L4 11 Z" fill="#00AEEF" />
        </svg>
      </span>
      {label && <span className={c.label}>{label}</span>}
    </span>
  );
});
