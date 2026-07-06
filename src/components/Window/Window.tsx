import { forwardRef, useCallback, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';
import { cx } from '../../utils';
import { windowClasses as c } from './Window.styles';
import type { WindowProps } from './Window.types';

export const Window = forwardRef<HTMLDivElement, WindowProps>(function Window(
  {
    title,
    icon,
    active = true,
    minimizable = false,
    maximizable = false,
    closable = false,
    onMinimize,
    onMaximize,
    onClose,
    draggable95 = false,
    width,
    height,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragState = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!draggable95) return;
      if ((e.target as HTMLElement).closest('button')) return;
      dragState.current = { startX: e.clientX, startY: e.clientY, baseX: offset.x, baseY: offset.y };
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    },
    [draggable95, offset]
  );
  const onPointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragState.current;
    if (!d) return;
    setOffset({ x: d.baseX + e.clientX - d.startX, y: d.baseY + e.clientY - d.startY });
  }, []);
  const onPointerUp = useCallback(() => {
    dragState.current = null;
  }, []);

  const mergedStyle: CSSProperties = {
    width,
    height,
    ...(draggable95 ? { transform: `translate(${offset.x}px, ${offset.y}px)` } : null),
    ...style,
  };

  return (
    <div ref={ref} role="dialog" aria-label={typeof title === 'string' ? title : undefined} className={cx(c.root, className)} style={mergedStyle} {...rest}>
      <div
        className={cx(c.titlebar, !active && c.titlebarInactive)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={draggable95 ? { cursor: 'move', touchAction: 'none' } : undefined}
      >
        {icon && <span className={c.icon} aria-hidden="true">{icon}</span>}
        <span className={c.title}>{title}</span>
        <span className={c.controls}>
          {minimizable && (
            <button type="button" className={c.controlBtn} aria-label="Minimize" onClick={onMinimize}>_</button>
          )}
          {maximizable && (
            <button type="button" className={c.controlBtn} aria-label="Maximize" onClick={onMaximize}>{'\u25A1'}</button>
          )}
          {closable && (
            <button type="button" className={c.controlBtn} aria-label="Close" onClick={onClose}>{'\u00D7'}</button>
          )}
        </span>
      </div>
      <div className={c.body}>{children}</div>
    </div>
  );
});
