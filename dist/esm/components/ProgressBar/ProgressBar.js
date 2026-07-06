import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils';
import { progressClasses as c } from './ProgressBar.styles';
const TOTAL_BLOCKS = 18;
export const ProgressBar = forwardRef(function ProgressBar({ value, showLabel = false, width, className, style, ...rest }, ref) {
    const clamped = Math.max(0, Math.min(100, value));
    const filled = Math.round((clamped / 100) * TOTAL_BLOCKS);
    return (_jsxs("div", { ref: ref, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": clamped, className: cx(c.root, className), style: { width, ...style }, ...rest, children: [_jsx("div", { className: c.blocks, "aria-hidden": "true", children: Array.from({ length: TOTAL_BLOCKS }, (_, i) => (_jsx("span", { className: c.block, style: { visibility: i < filled ? 'visible' : 'hidden' } }, i))) }), showLabel && _jsxs("span", { className: c.label, children: [clamped, "%"] })] }));
});
