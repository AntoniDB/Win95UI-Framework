import { forwardRef, useEffect, useRef } from 'react';
import { Window } from '../Window';
import { Button } from '../Button';
import { cx } from '../../utils';
import { messageBoxClasses as c } from './MessageBox.styles';
import { messageBoxIcons } from './icons';
import type { MessageBoxProps } from './MessageBox.types';

export const MessageBox = forwardRef<HTMLDivElement, MessageBoxProps>(function MessageBox(
  { open, title, children, icon = 'info', buttons = ['OK'], onAction, onClose, className, style },
  ref
) {
  const firstBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) firstBtn.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={ref} className={cx(c.overlay, className)} style={style} role="alertdialog" aria-modal="true" aria-label={title}>
      <Window title={title} closable onClose={onClose}>
        <div className={c.content}>
          <span className={c.icon}>{messageBoxIcons[icon]}</span>
          <div className={c.text}>{children}</div>
        </div>
        <div className={c.buttons}>
          {buttons.map((label, i) => (
            <Button
              key={label}
              ref={i === 0 ? firstBtn : undefined}
              primary={i === 0}
              onClick={() => {
                onAction?.(label);
                onClose?.();
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </Window>
    </div>
  );
});
