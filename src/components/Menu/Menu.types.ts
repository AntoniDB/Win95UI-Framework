import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuEntry {
  id: string;
  label?: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  separator?: boolean;
  /** nested entries render a submenu */
  items?: MenuEntry[];
  onSelect?: () => void;
}

export interface MenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
  items: MenuEntry[];
  /** called with the id of the selected leaf item */
  onSelect?: (id: string) => void;
}

export interface MenuBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  menus: { id: string; label: ReactNode; items: MenuEntry[] }[];
  onSelect?: (id: string) => void;
}
