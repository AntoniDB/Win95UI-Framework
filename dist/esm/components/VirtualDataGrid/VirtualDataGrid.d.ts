import type { ForwardedRef, ReactElement } from 'react';
import type { VirtualDataGridProps } from './VirtualDataGrid.types';
export declare const VirtualDataGrid: <Row>(props: VirtualDataGridProps<Row> & {
    ref?: ForwardedRef<HTMLTableElement>;
}) => ReactElement;
