import { forwardRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { cx } from '../../utils';
import { listViewClasses as c } from './ListView.styles';
import type { ListViewProps } from './ListView.types';

export const ListView = forwardRef<HTMLUListElement, ListViewProps>(function ListView(
  { items, selectedId, defaultSelectedId, onSelect, height, className, style, ...rest },
  ref
) {
  const [internal, setInternal] = useState<string | undefined>(defaultSelectedId);
  const selected = selectedId ?? internal;

  const select = (id: string) => {
    if (selectedId === undefined) setInternal(id);
    onSelect?.(id);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const enabled = items.filter((i) => !i.disabled);
    const idx = enabled.findIndex((i) => i.id === selected);
    if (e.key === 'ArrowDown' && idx < enabled.length - 1) {
      e.preventDefault();
      const target = enabled[idx + 1];
      if (target) select(target.id);
    }
    if (e.key === 'ArrowUp' && idx > 0) {
      e.preventDefault();
      const target = enabled[idx - 1];
      if (target) select(target.id);
    }
  };

  return (
    <ul
      ref={ref}
      role="listbox"
      tabIndex={0}
      aria-activedescendant={selected ? `w95-lv-${selected}` : undefined}
      className={cx(c.root, className)}
      style={{ height, ...style }}
      onKeyDown={onKeyDown}
      {...rest}
    >
      {items.map((item) => (
        <li
          key={item.id}
          id={`w95-lv-${item.id}`}
          role="option"
          aria-selected={item.id === selected}
          aria-disabled={item.disabled || undefined}
          className={cx(c.item, item.id === selected && c.itemSelected, item.disabled && c.itemDisabled)}
          onClick={() => !item.disabled && select(item.id)}
        >
          {item.icon && <span className={c.icon} aria-hidden="true">{item.icon}</span>}
          {item.label}
        </li>
      ))}
    </ul>
  );
});
