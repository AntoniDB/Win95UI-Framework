"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const TreeView_styles_1 = require("./TreeView.styles");
function TreeItem({ node, onSelect, selectedId, }) {
    const [expanded, setExpanded] = (0, react_1.useState)(node.defaultExpanded ?? false);
    const hasChildren = !!node.children?.length;
    const selected = selectedId === node.id;
    return ((0, jsx_runtime_1.jsxs)("li", { role: "treeitem", "aria-expanded": hasChildren ? expanded : undefined, "aria-selected": selected, children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cx)(TreeView_styles_1.treeClasses.row, selected && TreeView_styles_1.treeClasses.rowSelected), tabIndex: 0, onClick: () => onSelect?.(node.id), onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelect?.(node.id);
                    }
                    if (e.key === 'ArrowRight' && hasChildren)
                        setExpanded(true);
                    if (e.key === 'ArrowLeft' && hasChildren)
                        setExpanded(false);
                }, children: [hasChildren ? ((0, jsx_runtime_1.jsx)("button", { type: "button", className: TreeView_styles_1.treeClasses.toggle, "aria-label": expanded ? 'Collapse' : 'Expand', tabIndex: -1, onClick: (e) => { e.stopPropagation(); setExpanded((v) => !v); }, children: expanded ? '-' : '+' })) : ((0, jsx_runtime_1.jsx)("span", { className: TreeView_styles_1.treeClasses.spacer })), (0, jsx_runtime_1.jsx)("span", { className: "w95-tree__text", children: node.label })] }), hasChildren && expanded && ((0, jsx_runtime_1.jsx)("ul", { role: "group", className: TreeView_styles_1.treeClasses.children, children: node.children.map((child) => ((0, jsx_runtime_1.jsx)(TreeItem, { node: child, onSelect: onSelect, selectedId: selectedId }, child.id))) }))] }));
}
exports.TreeView = (0, react_1.forwardRef)(function TreeView({ nodes, onSelect, selectedId, className, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsx)("ul", { ref: ref, role: "tree", className: (0, utils_1.cx)(TreeView_styles_1.treeClasses.root, className), ...rest, children: nodes.map((n) => ((0, jsx_runtime_1.jsx)(TreeItem, { node: n, onSelect: onSelect, selectedId: selectedId }, n.id))) }));
});
