"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Radio_styles_1 = require("./Radio.styles");
exports.Radio = (0, react_1.forwardRef)(function Radio({ label, className, style, id: idProp, ...rest }, ref) {
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-radio-${autoId}`;
    return ((0, jsx_runtime_1.jsxs)("label", { className: (0, utils_1.cx)(Radio_styles_1.radioClasses.root, className), style: style, htmlFor: id, children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, id: id, type: "radio", className: Radio_styles_1.radioClasses.input, ...rest }), (0, jsx_runtime_1.jsx)("span", { className: Radio_styles_1.radioClasses.circle, "aria-hidden": "true" }), label && (0, jsx_runtime_1.jsx)("span", { className: Radio_styles_1.radioClasses.label, children: label })] }));
});
