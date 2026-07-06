import { forwardRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { cx } from '../../utils';
import { treeClasses as c } from './TreeView.styles';
import type { TreeNode, TreeViewProps } from './TreeView.types';

function TreeItem({
  node,
  onSelect,
  selectedId,
}: {
  node: TreeNode;
  onSelect?: (id: string) => void;
  selectedId?: string;
}) {
  const [expanded, setExpanded] = useState(node.defaultExpanded ?? false);
  const hasChildren = !!node.children?.length;
  const selected = selectedId === node.id;
  return (
    <li role="treeitem" aria-expanded={hasChildren ? expanded : undefined} aria-selected={selected}>
      <div
        className={cx(c.row, selected && c.rowSelected)}
        tabIndex={0}
        onClick={() => onSelect?.(node.id)}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect?.(node.id); }
          if (e.key === 'ArrowRight' && hasChildren) setExpanded(true);
          if (e.key === 'ArrowLeft' && hasChildren) setExpanded(false);
        }}
      >
        {hasChildren ? (
          <button
            type="button"
            className={c.toggle}
            aria-label={expanded ? 'Collapse' : 'Expand'}
            tabIndex={-1}
            onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
          >
            {expanded ? '-' : '+'}
          </button>
        ) : (
          <span className={c.spacer} />
        )}
        <span className="w95-tree__text">{node.label}</span>
      </div>
      {hasChildren && expanded && (
        <ul role="group" className={c.children}>
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} onSelect={onSelect} selectedId={selectedId} />
          ))}
        </ul>
      )}
    </li>
  );
}

export const TreeView = forwardRef<HTMLUListElement, TreeViewProps>(function TreeView(
  { nodes, onSelect, selectedId, className, ...rest },
  ref
) {
  return (
    <ul ref={ref} role="tree" className={cx(c.root, className)} {...rest}>
      {nodes.map((n) => (
        <TreeItem key={n.id} node={n} onSelect={onSelect} selectedId={selectedId} />
      ))}
    </ul>
  );
});
