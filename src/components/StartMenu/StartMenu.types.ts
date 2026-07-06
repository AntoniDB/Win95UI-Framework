import type { HTMLAttributes } from 'react';
import type { MenuEntry } from '../Menu';

export interface StartMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  open: boolean;
  items: MenuEntry[];
  onSelect?: (id: string) => void;
  onClose?: () => void;
  /** text of the vertical side band */
  brand?: string;
}
