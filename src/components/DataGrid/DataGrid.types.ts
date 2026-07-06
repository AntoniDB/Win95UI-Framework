import type { HTMLAttributes, ReactNode } from 'react';

export interface DataGridColumn<Row> {
  key: string;
  header: ReactNode;
  /** value used for rendering and sorting */
  accessor: (row: Row) => string | number;
  render?: (row: Row) => ReactNode;
  width?: number | string;
  sortable?: boolean;
}

export type SortDirection = 'asc' | 'desc';

export interface DataGridProps<Row> extends Omit<HTMLAttributes<HTMLTableElement>, 'onSelect'> {
  columns: DataGridColumn<Row>[];
  rows: Row[];
  rowKey: (row: Row) => string;
  onRowClick?: (row: Row) => void;
  selectedKey?: string;
  height?: number | string;
}
