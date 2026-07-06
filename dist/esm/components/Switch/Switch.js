import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { switchClasses as c } from './Switch.styles';
export const Switch = forwardRef(function Switch({ label, onLabel = 'I', offLabel = 'O', className, style, id: idProp, ...rest }, ref) {
    const autoId = useId();
    const id = idProp ?? `w95-switch-${autoId}`;
    return (_jsxs("label", { className: cx(c.root, className), style: style, htmlFor: id, children: [_jsx("input", { ref: ref, id: id, type: "checkbox", role: "switch", className: c.input, ...rest }), _jsxs("span", { className: c.track, "aria-hidden": "true", children: [_jsx("span", { className: `${c.side} w95-switch__side--off`, children: offLabel }), _jsx("span", { className: `${c.side} w95-switch__side--on`, children: onLabel }), _jsx("span", { className: c.thumb })] }), label && _jsx("span", { className: c.label, children: label })] }));
});
