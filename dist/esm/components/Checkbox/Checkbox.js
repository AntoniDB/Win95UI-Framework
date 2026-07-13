import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils.js';
import { checkboxClasses as c } from './Checkbox.styles.js';
export const Checkbox = forwardRef(function Checkbox({ label, className, style, id: idProp, ...rest }, ref) {
    const autoId = useId();
    const id = idProp ?? `w95-cb-${autoId}`;
    return (_jsxs("label", { className: cx(c.root, className), style: style, htmlFor: id, children: [_jsx("input", { ref: ref, id: id, type: "checkbox", className: c.input, ...rest }), _jsx("span", { className: c.box, "aria-hidden": "true" }), label && _jsx("span", { className: c.label, children: label })] }));
});
