import { forwardRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { cx } from '../../utils';
import { menuClasses as c } from './Menu.styles';
import type { MenuEntry, MenuProps, MenuBarProps } from './Menu.types';

function MenuItemRow({
  entry,
  onLeafSelect,
}: {
  entry: MenuEntry;
  onLeafSelect?: (id: string) => void;
}): ReactNode {
  const [open, setOpen] = useState(false);
  if (entry.separator) return <li role="separator" className={c.separator} />;
  const hasSub = !!entry.items?.length;
  const activate = () => {
    if (entry.disabled) return;
    if (hasSub) {
      setOpen((o) => !o);
      return;
    }
    entry.onSelect?.();
    onLeafSelect?.(entry.id);
  };
  return (
    <li
      role="menuitem"
      aria-disabled={entry.disabled || undefined}
      aria-haspopup={hasSub || undefined}
      aria-expanded={hasSub ? open : undefined}
      data-open={open || undefined}
      tabIndex={entry.disabled ? -1 : 0}
      className={cx(c.item, entry.disabled && c.itemDisabled)}
      onClick={activate}
      onKeyDown={(e: KeyboardEvent<HTMLLIElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate();
        }
        if (hasSub && e.key === 'ArrowRight') setOpen(true);
        if (hasSub && e.key === 'ArrowLeft') setOpen(false);
      }}
      onMouseEnter={hasSub ? () => setOpen(true) : undefined}
      onMouseLeave={hasSub ? () => setOpen(false) : undefined}
    >
      <span className={c.icon} aria-hidden="true">{entry.icon}</span>
      <span className={c.label}>{entry.label}</span>
      {entry.shortcut && <span className={c.shortcut}>{entry.shortcut}</span>}
      {hasSub && <span className={c.submenuArrow} aria-hidden="true">{'\u25B6'}</span>}
      {hasSub && open && (
        <span className={c.submenu}>
          <Menu items={entry.items ?? []} onSelect={onLeafSelect} />
        </span>
      )}
    </li>
  );
}

export const Menu = forwardRef<HTMLUListElement, MenuProps>(function Menu(
  { items, onSelect, className, ...rest },
  ref
) {
  return (
    <ul ref={ref} role="menu" className={cx(c.menu, className)} {...rest}>
      {items.map((entry, i) => (
        <MenuItemRow key={entry.id || `sep-${i}`} entry={entry} onLeafSelect={onSelect} />
      ))}
    </ul>
  );
});

export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(function MenuBar(
  { menus, onSelect, className, ...rest },
  ref
) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div ref={ref} role="menubar" className={cx(c.bar, className)} {...rest}>
      {menus.map((m) => (
        <span key={m.id} className="w95-menubar__anchor">
          <button
            type="button"
            role="menuitem"
            aria-haspopup="menu"
            aria-expanded={openId === m.id}
            className={cx(c.barItem, 'w95-focusable', openId === m.id && c.barItemOpen)}
            onClick={() => setOpenId((cur) => (cur === m.id ? null : m.id))}
            onMouseEnter={() => {
              if (openId !== null) setOpenId(m.id);
            }}
          >
            {m.label}
          </button>
          {openId === m.id && (
            <span className={c.barPopup}>
              <Menu
                items={m.items}
                onSelect={(id) => {
                  setOpenId(null);
                  onSelect?.(id);
                }}
              />
            </span>
          )}
        </span>
      ))}
    </div>
  );
});
