import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { selectClasses as c } from './Select.styles';
export const Select = forwardRef(function Select({ label, options, fullWidth = false, className, style, id: idProp, children, ...rest }, ref) {
    const autoId = useId();
    const id = idProp ?? `w95-sel-${autoId}`;
    return (_jsxs("div", { className: cx(c.root, fullWidth && c.fullWidth, className), style: style, children: [label && _jsx("label", { htmlFor: id, className: c.label, children: label }), _jsxs("span", { className: c.wrap, children: [_jsx("select", { ref: ref, id: id, className: c.native, ...rest, children: options
                            ? options.map((o) => (_jsx("option", { value: o.value, disabled: o.disabled, children: o.label }, o.value)))
                            : children }), _jsx("span", { className: c.arrow, "aria-hidden": "true" })] })] }));
});
