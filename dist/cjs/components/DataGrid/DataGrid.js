"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const DataGrid_styles_1 = require("./DataGrid.styles");
function DataGridInner({ columns, rows, rowKey, onRowClick, selectedKey, height, className, style, ...rest }, ref) {
    const [sortKey, setSortKey] = (0, react_1.useState)(null);
    const [sortDir, setSortDir] = (0, react_1.useState)('asc');
    const sorted = (0, react_1.useMemo)(() => {
        if (!sortKey)
            return rows;
        const col = columns.find((col) => col.key === sortKey);
        if (!col)
            return rows;
        const copy = [...rows];
        copy.sort((a, b) => {
            const va = col.accessor(a);
            const vb = col.accessor(b);
            const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
            return sortDir === 'asc' ? cmp : -cmp;
        });
        return copy;
    }, [rows, columns, sortKey, sortDir]);
    const toggleSort = (key) => {
        if (sortKey === key)
            setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
        else {
            setSortKey(key);
            setSortDir('asc');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.wrap, className), style: { height, ...style }, children: (0, jsx_runtime_1.jsxs)("table", { ref: ref, className: DataGrid_styles_1.dataGridClasses.table, ...rest, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map((col) => {
                            const sortable = col.sortable !== false;
                            const isSorted = sortKey === col.key;
                            return ((0, jsx_runtime_1.jsxs)("th", { scope: "col", style: { width: col.width }, "aria-sort": isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined, className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.th, isSorted && DataGrid_styles_1.dataGridClasses.thPressed), tabIndex: sortable ? 0 : undefined, onClick: sortable ? () => toggleSort(col.key) : undefined, onKeyDown: sortable
                                    ? (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleSort(col.key);
                                        }
                                    }
                                    : undefined, children: [col.header, isSorted && ((0, jsx_runtime_1.jsx)("span", { className: DataGrid_styles_1.dataGridClasses.sortMark, "aria-hidden": "true", children: sortDir === 'asc' ? '\u25B2' : '\u25BC' }))] }, col.key));
                        }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: sorted.map((row, i) => {
                        const key = rowKey(row);
                        return ((0, jsx_runtime_1.jsx)("tr", { className: (0, utils_1.cx)(i % 2 === 1 && DataGrid_styles_1.dataGridClasses.rowAlt, selectedKey === key && DataGrid_styles_1.dataGridClasses.rowSelected), onClick: onRowClick ? () => onRowClick(row) : undefined, children: columns.map((col) => ((0, jsx_runtime_1.jsx)("td", { className: DataGrid_styles_1.dataGridClasses.td, children: col.render ? col.render(row) : col.accessor(row) }, col.key))) }, key));
                    }) })] }) }));
}
exports.DataGrid = (0, react_1.forwardRef)(DataGridInner);
