import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cx } from '../../utils';
import { treeClasses as c } from './TreeView.styles';
function TreeItem({ node, onSelect, selectedId, }) {
    const [expanded, setExpanded] = useState(node.defaultExpanded ?? false);
    const hasChildren = !!node.children?.length;
    const selected = selectedId === node.id;
    return (_jsxs("li", { role: "treeitem", "aria-expanded": hasChildren ? expanded : undefined, "aria-selected": selected, children: [_jsxs("div", { className: cx(c.row, selected && c.rowSelected), tabIndex: 0, onClick: () => onSelect?.(node.id), onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelect?.(node.id);
                    }
                    if (e.key === 'ArrowRight' && hasChildren)
                        setExpanded(true);
                    if (e.key === 'ArrowLeft' && hasChildren)
                        setExpanded(false);
                }, children: [hasChildren ? (_jsx("button", { type: "button", className: c.toggle, "aria-label": expanded ? 'Collapse' : 'Expand', tabIndex: -1, onClick: (e) => { e.stopPropagation(); setExpanded((v) => !v); }, children: expanded ? '-' : '+' })) : (_jsx("span", { className: c.spacer })), _jsx("span", { className: "w95-tree__text", children: node.label })] }), hasChildren && expanded && (_jsx("ul", { role: "group", className: c.children, children: node.children.map((child) => (_jsx(TreeItem, { node: child, onSelect: onSelect, selectedId: selectedId }, child.id))) }))] }));
}
export const TreeView = forwardRef(function TreeView({ nodes, onSelect, selectedId, className, ...rest }, ref) {
    return (_jsx("ul", { ref: ref, role: "tree", className: cx(c.root, className), ...rest, children: nodes.map((n) => (_jsx(TreeItem, { node: n, onSelect: onSelect, selectedId: selectedId }, n.id))) }));
});
