"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Checkbox_styles_1 = require("./Checkbox.styles");
exports.Checkbox = (0, react_1.forwardRef)(function Checkbox({ label, className, style, id: idProp, ...rest }, ref) {
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-cb-${autoId}`;
    return ((0, jsx_runtime_1.jsxs)("label", { className: (0, utils_1.cx)(Checkbox_styles_1.checkboxClasses.root, className), style: style, htmlFor: id, children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, id: id, type: "checkbox", className: Checkbox_styles_1.checkboxClasses.input, ...rest }), (0, jsx_runtime_1.jsx)("span", { className: Checkbox_styles_1.checkboxClasses.box, "aria-hidden": "true" }), label && (0, jsx_runtime_1.jsx)("span", { className: Checkbox_styles_1.checkboxClasses.label, children: label })] }));
});
