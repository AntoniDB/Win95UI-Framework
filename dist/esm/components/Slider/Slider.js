import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils.js';
import { sliderClasses as c } from './Slider.styles.js';
export const Slider = forwardRef(function Slider({ label, className, style, id: idProp, min = 0, max = 100, step = 1, ...rest }, ref) {
    const autoId = useId();
    const id = idProp ?? `w95-slider-${autoId}`;
    return (_jsxs("div", { className: cx(c.root, className), style: style, children: [label && _jsx("label", { htmlFor: id, className: c.label, children: label }), _jsx("input", { ref: ref, id: id, type: "range", min: min, max: max, step: step, className: c.input, ...rest })] }));
});
