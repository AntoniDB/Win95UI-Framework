import type { ForwardedRef, ReactElement } from 'react';
import type { DataGridProps } from './DataGrid.types';
export declare const DataGrid: <Row>(props: DataGridProps<Row> & {
    ref?: ForwardedRef<HTMLTableElement>;
}) => ReactElement;
