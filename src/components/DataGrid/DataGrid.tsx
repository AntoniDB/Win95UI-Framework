import { forwardRef, useMemo, useState } from 'react';
import type { ForwardedRef, ReactElement } from 'react';
import { cx } from '../../utils';
import { dataGridClasses as c } from './DataGrid.styles';
import type { DataGridProps, SortDirection } from './DataGrid.types';

function DataGridInner<Row>(
  { columns, rows, rowKey, onRowClick, selectedKey, height, className, style, ...rest }: DataGridProps<Row>,
  ref: ForwardedRef<HTMLTableElement>
) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('asc');

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

  return (
    <div className={cx(c.wrap, className)} style={{ height, ...style }}>
      <table ref={ref} className={c.table} {...rest}>
        <thead>
          <tr>
            {columns.map((col) => {
              const sortable = col.sortable !== false;
              const isSorted = sortKey === col.key;
              return (
                <th
                  key={col.key}
                  scope="col"
                  style={{ width: col.width }}
                  aria-sort={isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined}
                  className={cx(c.th, isSorted && c.thPressed)}
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
                    <span className={c.sortMark} aria-hidden="true">
                      {sortDir === 'asc' ? '\u25B2' : '\u25BC'}
                    </span>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => {
            const key = rowKey(row);
            return (
              <tr
                key={key}
                className={cx(i % 2 === 1 && c.rowAlt, selectedKey === key && c.rowSelected)}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((col) => (
                  <td key={col.key} className={c.td}>
                    {col.render ? col.render(row) : col.accessor(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export const DataGrid = forwardRef(DataGridInner) as <Row>(
  props: DataGridProps<Row> & { ref?: ForwardedRef<HTMLTableElement> }
) => ReactElement;
