import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { cx } from '../../utils.js';
import { dataGridClasses as dg } from '../DataGrid/DataGrid.styles.js';
import { virtualDataGridClasses as c } from './VirtualDataGrid.styles.js';
function VirtualDataGridInner({ columns, rows, rowKey, onRowClick, selectedKey, height, rowHeight = 22, overscan = 8, className, style, ...rest }, ref) {
    const [sortKey, setSortKey] = useState(null);
    const [sortDir, setSortDir] = useState('asc');
    const [scrollTop, setScrollTop] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);
    const [headHeight, setHeadHeight] = useState(0);
    const wrapRef = useRef(null);
    const headRef = useRef(null);
    const frame = useRef(null);
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
    // track viewport and header size so the visible range stays correct on resize
    useEffect(() => {
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
    useEffect(() => () => {
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
    return (_jsx("div", { ref: wrapRef, className: cx(dg.wrap, c.wrap, className), style: { height, ...style }, onScroll: handleScroll, children: _jsxs("table", { ref: ref, className: cx(dg.table, c.table), "aria-rowcount": total + 1, ...rest, children: [_jsx("colgroup", { children: columns.map((col) => (_jsx("col", { style: { width: col.width } }, col.key))) }), _jsx("thead", { ref: headRef, children: _jsx("tr", { "aria-rowindex": 1, children: columns.map((col) => {
                            const sortable = col.sortable !== false;
                            const isSorted = sortKey === col.key;
                            return (_jsxs("th", { scope: "col", "aria-sort": isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined, className: cx(dg.th, isSorted && dg.thPressed), tabIndex: sortable ? 0 : undefined, onClick: sortable ? () => toggleSort(col.key) : undefined, onKeyDown: sortable
                                    ? (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            toggleSort(col.key);
                                        }
                                    }
                                    : undefined, children: [col.header, isSorted && (_jsx("span", { className: dg.sortMark, "aria-hidden": "true", children: sortDir === 'asc' ? '▲' : '▼' }))] }, col.key));
                        }) }) }), _jsxs("tbody", { children: [start > 0 && (_jsx("tr", { className: c.spacer, "aria-hidden": "true", style: { height: start * rowHeight }, children: _jsx("td", { colSpan: columns.length }) })), visible.map((row, i) => {
                            const index = start + i;
                            const key = rowKey(row);
                            return (_jsx("tr", { "aria-rowindex": index + 2, style: { height: rowHeight }, className: cx(index % 2 === 1 && dg.rowAlt, selectedKey === key && dg.rowSelected), onClick: onRowClick ? () => onRowClick(row) : undefined, children: columns.map((col) => (_jsx("td", { className: cx(dg.td, c.td), children: _jsx("div", { className: c.cell, style: { height: rowHeight, lineHeight: `${rowHeight}px` }, children: col.render ? col.render(row) : col.accessor(row) }) }, col.key))) }, key));
                        }), end < total && (_jsx("tr", { className: c.spacer, "aria-hidden": "true", style: { height: (total - end) * rowHeight }, children: _jsx("td", { colSpan: columns.length }) }))] })] }) }));
}
export const VirtualDataGrid = forwardRef(VirtualDataGridInner);
