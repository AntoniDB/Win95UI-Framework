import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo, useState } from 'react';
import { cx } from '../../utils.js';
import { dataGridClasses as c } from './DataGrid.styles.js';
function DataGridInner({ columns, rows, rowKey, onRowClick, selectedKey, height, className, style, ...rest }, ref) {
    const [sortKey, setSortKey] = useState(null);
    const [sortDir, setSortDir] = useState('asc');
    const sorted = useMemo(() => {
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
    return (_jsx("div", { className: cx(c.wrap, className), style: { height, ...style }, children: _jsxs("table", { ref: ref, className: c.table, ...rest, children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((col) => {
                            const sortable = col.sortable !== false;
                            const isSorted = sortKey === col.key;
                            return (_jsxs("th", { scope: "col", style: { width: col.width }, "aria-sort": isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined, className: cx(c.th, isSorted && c.thPressed), tabIndex: sortable ? 0 : undefined, onClick: sortable ? () => toggleSort(col.key) : undefined, onKeyDown: sortable
                                    ? (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleSort(col.key);
                                        }
                                    }
                                    : undefined, children: [col.header, isSorted && (_jsx("span", { className: c.sortMark, "aria-hidden": "true", children: sortDir === 'asc' ? '\u25B2' : '\u25BC' }))] }, col.key));
                        }) }) }), _jsx("tbody", { children: sorted.map((row, i) => {
                        const key = rowKey(row);
                        return (_jsx("tr", { className: cx(i % 2 === 1 && c.rowAlt, selectedKey === key && c.rowSelected), onClick: onRowClick ? () => onRowClick(row) : undefined, children: columns.map((col) => (_jsx("td", { className: c.td, children: col.render ? col.render(row) : col.accessor(row) }, col.key))) }, key));
                    }) })] }) }));
}
export const DataGrid = forwardRef(DataGridInner);
