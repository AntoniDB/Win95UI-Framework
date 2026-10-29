import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import type { ForwardedRef, ReactElement } from 'react';
import { cx } from '../../utils';
import { dataGridClasses as dg } from '../DataGrid/DataGrid.styles';
import type { SortDirection } from '../DataGrid/DataGrid.types';
import { virtualDataGridClasses as c } from './VirtualDataGrid.styles';
import type { VirtualDataGridProps } from './VirtualDataGrid.types';

function VirtualDataGridInner<Row>(
  {
    columns,
    rows,
    rowKey,
    onRowClick,
    selectedKey,
    height,
    rowHeight = 22,
    overscan = 8,
    className,
    style,
    ...rest
  }: VirtualDataGridProps<Row>,
  ref: ForwardedRef<HTMLTableElement>
) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('asc');
  const [scrollTop, setScrollTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [headHeight, setHeadHeight] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLTableSectionElement>(null);
  const frame = useRef<number | null>(null);

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    const col = columns.find((col) => col.key === sortKey);
    if (!col) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const va = col.accessor(a);
      const vb = col.accessor(b);
      const cmp = typeof va === 'number' && typeof vb === 'number' ? va - vb : String(va).localeCompare(String(vb));
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return copy;
  }, [rows, columns, sortKey, sortDir]);

  const toggleSort = (key: string) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  // track viewport and header size so the visible range stays correct on resize
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const measure = () => {
      setViewportHeight(wrap.clientHeight);
      setHeadHeight(headRef.current?.offsetHeight ?? 0);
    };
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(wrap);
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    []
  );

  const handleScroll = () => {
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      if (wrapRef.current) setScrollTop(wrapRef.current.scrollTop);
    });
  };

  const total = sorted.length;
  const bodyTop = Math.max(0, scrollTop - headHeight);
  const bodyHeight = Math.max(0, viewportHeight - headHeight);
  const start = Math.min(total, Math.max(0, Math.floor(bodyTop / rowHeight) - overscan));
  const end = Math.min(total, Math.ceil((bodyTop + bodyHeight) / rowHeight) + overscan);
  const visible = sorted.slice(start, end);

  return (
    <div
      ref={wrapRef}
      className={cx(dg.wrap, c.wrap, className)}
      style={{ height, ...style }}
      onScroll={handleScroll}
    >
      <table ref={ref} className={cx(dg.table, c.table)} aria-rowcount={total + 1} {...rest}>
        <colgroup>
          {columns.map((col) => (
            <col key={col.key} style={{ width: col.width }} />
          ))}
        </colgroup>
        <thead ref={headRef}>
          <tr aria-rowindex={1}>
            {columns.map((col) => {
              const sortable = col.sortable !== false;
              const isSorted = sortKey === col.key;
              return (
                <th
                  key={col.key}
                  scope="col"
                  aria-sort={isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined}
                  className={cx(dg.th, isSorted && dg.thPressed)}
                  tabIndex={sortable ? 0 : undefined}
                  onClick={sortable ? () => toggleSort(col.key) : undefined}
                  onKeyDown={
                    sortable
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleSort(col.key);
                          }
                        }
                      : undefined
                  }
                >
                  {col.header}
                  {isSorted && (
                    <span className={dg.sortMark} aria-hidden="true">
                      {sortDir === 'asc' ? '▲' : '▼'}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {start > 0 && (
            <tr className={c.spacer} aria-hidden="true" style={{ height: start * rowHeight }}>
              <td colSpan={columns.length} />
            </tr>
          )}
          {visible.map((row, i) => {
            const index = start + i;
            const key = rowKey(row);
            return (
              <tr
                key={key}
                aria-rowindex={index + 2}
                style={{ height: rowHeight }}
                className={cx(index % 2 === 1 && dg.rowAlt, selectedKey === key && dg.rowSelected)}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cx(dg.td, c.td)}>
                    <div className={c.cell} style={{ height: rowHeight, lineHeight: `${rowHeight}px` }}>
                      {col.render ? col.render(row) : col.accessor(row)}
                    </div>
                  </td>
                ))}
              </tr>
            );
          })}
          {end < total && (
            <tr className={c.spacer} aria-hidden="true" style={{ height: (total - end) * rowHeight }}>
              <td colSpan={columns.length} />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export const VirtualDataGrid = forwardRef(VirtualDataGridInner) as <Row>(
  props: VirtualDataGridProps<Row> & { ref?: ForwardedRef<HTMLTableElement> }
) => ReactElement;
