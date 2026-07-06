import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils';
import { groupBoxClasses as c } from './GroupBox.styles';
export const GroupBox = forwardRef(function GroupBox({ label, className, children, ...rest }, ref) {
    return (_jsxs("fieldset", { ref: ref, className: cx(c.root, className), ...rest, children: [label && _jsx("legend", { className: c.legend, children: label }), children] }));
});
