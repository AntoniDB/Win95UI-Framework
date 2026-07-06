import type { HTMLAttributes, ReactNode } from 'react';
export interface TreeNode {
    id: string;
    label: ReactNode;
    children?: TreeNode[];
    defaultExpanded?: boolean;
}
export interface TreeViewProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
    nodes: TreeNode[];
    onSelect?: (id: string) => void;
    selectedId?: string;
}
