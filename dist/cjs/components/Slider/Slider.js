"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Slider_styles_1 = require("./Slider.styles");
exports.Slider = (0, react_1.forwardRef)(function Slider({ label, className, style, id: idProp, min = 0, max = 100, step = 1, ...rest }, ref) {
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-slider-${autoId}`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cx)(Slider_styles_1.sliderClasses.root, className), style: style, children: [label && (0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: Slider_styles_1.sliderClasses.label, children: label }), (0, jsx_runtime_1.jsx)("input", { ref: ref, id: id, type: "range", min: min, max: max, step: step, className: Slider_styles_1.sliderClasses.input, ...rest })] }));
});
