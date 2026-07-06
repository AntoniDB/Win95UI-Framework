import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useState } from 'react';
import { cx } from '../../utils';
import { tooltipClasses as c } from './Tooltip.styles';
export const Tooltip = forwardRef(function Tooltip({ content, children, placement = 'bottom', className, ...rest }, ref) {
    const [visible, setVisible] = useState(false);
    const id = useId();
    return (_jsxs("span", { ref: ref, className: cx(c.root, className), onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), onFocus: () => setVisible(true), onBlur: () => setVisible(false), "aria-describedby": visible ? id : undefined, ...rest, children: [children, visible && (_jsx("span", { id: id, role: "tooltip", className: cx(c.bubble, placement === 'top' ? c.top : c.bottom), children: content }))] }));
});
