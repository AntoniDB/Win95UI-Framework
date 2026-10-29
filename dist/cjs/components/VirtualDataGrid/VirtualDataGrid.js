"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualDataGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const DataGrid_styles_1 = require("../DataGrid/DataGrid.styles");
const VirtualDataGrid_styles_1 = require("./VirtualDataGrid.styles");
function VirtualDataGridInner({ columns, rows, rowKey, onRowClick, selectedKey, height, rowHeight = 22, overscan = 8, className, style, ...rest }, ref) {
    const [sortKey, setSortKey] = (0, react_1.useState)(null);
    const [sortDir, setSortDir] = (0, react_1.useState)('asc');
    const [scrollTop, setScrollTop] = (0, react_1.useState)(0);
    const [viewportHeight, setViewportHeight] = (0, react_1.useState)(0);
    const [headHeight, setHeadHeight] = (0, react_1.useState)(0);
    const wrapRef = (0, react_1.useRef)(null);
    const headRef = (0, react_1.useRef)(null);
    const frame = (0, react_1.useRef)(null);
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
    // track viewport and header size so the visible range stays correct on resize
    (0, react_1.useEffect)(() => {
        const wrap = wrapRef.current;
        if (!wrap)
            return;
        const measure = () => {
            setViewportHeight(wrap.clientHeight);
            setHeadHeight(headRef.current?.offsetHeight ?? 0);
        };
        measure();
        if (typeof ResizeObserver === 'undefined')
            return;
        const observer = new ResizeObserver(measure);
        observer.observe(wrap);
        if (headRef.current)
            observer.observe(headRef.current);
        return () => observer.disconnect();
    }, []);
    (0, react_1.useEffect)(() => () => {
        if (frame.current !== null)
            cancelAnimationFrame(frame.current);
    }, []);
    const handleScroll = () => {
        if (frame.current !== null)
            return;
        frame.current = requestAnimationFrame(() => {
            frame.current = null;
            if (wrapRef.current)
                setScrollTop(wrapRef.current.scrollTop);
        });
    };
    const total = sorted.length;
    const bodyTop = Math.max(0, scrollTop - headHeight);
    const bodyHeight = Math.max(0, viewportHeight - headHeight);
    const start = Math.min(total, Math.max(0, Math.floor(bodyTop / rowHeight) - overscan));
    const end = Math.min(total, Math.ceil((bodyTop + bodyHeight) / rowHeight) + overscan);
    const visible = sorted.slice(start, end);
    return ((0, jsx_runtime_1.jsx)("div", { ref: wrapRef, className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.wrap, VirtualDataGrid_styles_1.virtualDataGridClasses.wrap, className), style: { height, ...style }, onScroll: handleScroll, children: (0, jsx_runtime_1.jsxs)("table", { ref: ref, className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.table, VirtualDataGrid_styles_1.virtualDataGridClasses.table), "aria-rowcount": total + 1, ...rest, children: [(0, jsx_runtime_1.jsx)("colgroup", { children: columns.map((col) => ((0, jsx_runtime_1.jsx)("col", { style: { width: col.width } }, col.key))) }), (0, jsx_runtime_1.jsx)("thead", { ref: headRef, children: (0, jsx_runtime_1.jsx)("tr", { "aria-rowindex": 1, children: columns.map((col) => {
                            const sortable = col.sortable !== false;
                            const isSorted = sortKey === col.key;
                            return ((0, jsx_runtime_1.jsxs)("th", { scope: "col", "aria-sort": isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined, className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.th, isSorted && DataGrid_styles_1.dataGridClasses.thPressed), tabIndex: sortable ? 0 : undefined, onClick: sortable ? () => toggleSort(col.key) : undefined, onKeyDown: sortable
                                    ? (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleSort(col.key);
                                        }
                                    }
                                    : undefined, children: [col.header, isSorted && ((0, jsx_runtime_1.jsx)("span", { className: DataGrid_styles_1.dataGridClasses.sortMark, "aria-hidden": "true", children: sortDir === 'asc' ? '▲' : '▼' }))] }, col.key));
                        }) }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [start > 0 && ((0, jsx_runtime_1.jsx)("tr", { className: VirtualDataGrid_styles_1.virtualDataGridClasses.spacer, "aria-hidden": "true", style: { height: start * rowHeight }, children: (0, jsx_runtime_1.jsx)("td", { colSpan: columns.length }) })), visible.map((row, i) => {
                            const index = start + i;
                            const key = rowKey(row);
                            return ((0, jsx_runtime_1.jsx)("tr", { "aria-rowindex": index + 2, style: { height: rowHeight }, className: (0, utils_1.cx)(index % 2 === 1 && DataGrid_styles_1.dataGridClasses.rowAlt, selectedKey === key && DataGrid_styles_1.dataGridClasses.rowSelected), onClick: onRowClick ? () => onRowClick(row) : undefined, children: columns.map((col) => ((0, jsx_runtime_1.jsx)("td", { className: (0, utils_1.cx)(DataGrid_styles_1.dataGridClasses.td, VirtualDataGrid_styles_1.virtualDataGridClasses.td), children: (0, jsx_runtime_1.jsx)("div", { className: VirtualDataGrid_styles_1.virtualDataGridClasses.cell, style: { height: rowHeight, lineHeight: `${rowHeight}px` }, children: col.render ? col.render(row) : col.accessor(row) }) }, col.key))) }, key));
                        }), end < total && ((0, jsx_runtime_1.jsx)("tr", { className: VirtualDataGrid_styles_1.virtualDataGridClasses.spacer, "aria-hidden": "true", style: { height: (total - end) * rowHeight }, children: (0, jsx_runtime_1.jsx)("td", { colSpan: columns.length }) }))] })] }) }));
}
exports.VirtualDataGrid = (0, react_1.forwardRef)(VirtualDataGridInner);
