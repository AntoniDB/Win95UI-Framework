import type { HTMLAttributes, ReactNode } from 'react';
export interface ListViewItem {
    id: string;
    label: ReactNode;
    icon?: ReactNode;
    disabled?: boolean;
}
export interface ListViewProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
    items: ListViewItem[];
    selectedId?: string;
    defaultSelectedId?: string;
    onSelect?: (id: string) => void;
    height?: number | string;
}
