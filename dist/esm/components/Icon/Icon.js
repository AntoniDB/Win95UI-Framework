import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils';
import { iconClasses as c } from './Icon.styles';
export const Icon = forwardRef(function Icon({ image, label, selected = false, onDesktop = false, className, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, tabIndex: 0, className: cx(c.root, onDesktop && c.onDesktop, className), ...rest, children: [_jsx("span", { className: c.image, "aria-hidden": "true", children: image }), label && _jsx("span", { className: cx(c.label, selected && c.labelSelected), children: label })] }));
});
