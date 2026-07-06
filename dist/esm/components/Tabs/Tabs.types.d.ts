import type { HTMLAttributes, ReactNode } from 'react';
export interface TabItem {
    id: string;
    label: ReactNode;
    content: ReactNode;
    disabled?: boolean;
}
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    tabs: TabItem[];
    value?: string;
    defaultValue?: string;
    onChange?: (id: string) => void;
}
