import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils.js';
import { radioClasses as c } from './Radio.styles.js';
export const Radio = forwardRef(function Radio({ label, className, style, id: idProp, ...rest }, ref) {
    const autoId = useId();
    const id = idProp ?? `w95-radio-${autoId}`;
    return (_jsxs("label", { className: cx(c.root, className), style: style, htmlFor: id, children: [_jsx("input", { ref: ref, id: id, type: "radio", className: c.input, ...rest }), _jsx("span", { className: c.circle, "aria-hidden": "true" }), label && _jsx("span", { className: c.label, children: label })] }));
});
