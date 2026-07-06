import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils';
import { badgeClasses as c } from './Badge.styles';
export const Badge = forwardRef(function Badge({ variant = 'raised', onDelete, className, children, ...rest }, ref) {
    return (_jsxs("span", { ref: ref, className: cx(c.root, variant === 'sunken' && c.sunken, className), ...rest, children: [children, onDelete && (_jsx("button", { type: "button", className: c.delete, "aria-label": "Remove", onClick: onDelete, children: "x" }))] }));
});
