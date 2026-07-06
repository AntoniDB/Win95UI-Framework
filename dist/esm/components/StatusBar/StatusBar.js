import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils';
import { statusBarClasses as c } from './StatusBar.styles';
export const StatusBar = forwardRef(function StatusBar({ panels, className, children, ...rest }, ref) {
    return (_jsx("div", { ref: ref, role: "status", className: cx(c.root, className), ...rest, children: panels
            ? panels.map((p, i) => (_jsx("span", { className: c.panel, children: p }, i)))
            : children }));
});
