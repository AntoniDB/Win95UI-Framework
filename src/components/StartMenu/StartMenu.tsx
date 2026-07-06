import { forwardRef, useEffect } from 'react';
import { Menu } from '../Menu';
import { cx } from '../../utils';
import { startMenuClasses as c } from './StartMenu.styles';
import type { StartMenuProps } from './StartMenu.types';

export const StartMenu = forwardRef<HTMLDivElement, StartMenuProps>(function StartMenu(
  { open, items, onSelect, onClose, brand = 'Windows 95', className, ...rest },
  ref
) {
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
    <div ref={ref} className={cx(c.root, className)} role="menu" aria-label="Start menu" {...rest}>
      <span className={c.band} aria-hidden="true">{brand}</span>
      <Menu
        className={c.menu}
        items={items}
        onSelect={(id) => {
          onSelect?.(id);
          onClose?.();
        }}
      />
    </div>
  );
});
