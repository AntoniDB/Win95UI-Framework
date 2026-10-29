import type { HTMLAttributes } from 'react';
import type { DataGridColumn } from '../DataGrid/DataGrid.types';
export interface VirtualDataGridProps<Row> extends Omit<HTMLAttributes<HTMLTableElement>, 'onSelect'> {
    columns: DataGridColumn<Row>[];
    rows: Row[];
    rowKey: (row: Row) => string;
    onRowClick?: (row: Row) => void;
    selectedKey?: string;
    /** required: the grid only renders the rows that fit in this height */
    height: number | string;
    /** fixed height of every row in px (default 22) */
    rowHeight?: number;
    /** extra rows rendered above and below the visible area (default 8) */
    overscan?: number;
}
