"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Select_styles_1 = require("./Select.styles");
exports.Select = (0, react_1.forwardRef)(function Select({ label, options, fullWidth = false, className, style, id: idProp, children, ...rest }, ref) {
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-sel-${autoId}`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cx)(Select_styles_1.selectClasses.root, fullWidth && Select_styles_1.selectClasses.fullWidth, className), style: style, children: [label && (0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: Select_styles_1.selectClasses.label, children: label }), (0, jsx_runtime_1.jsxs)("span", { className: Select_styles_1.selectClasses.wrap, children: [(0, jsx_runtime_1.jsx)("select", { ref: ref, id: id, className: Select_styles_1.selectClasses.native, ...rest, children: options
                            ? options.map((o) => ((0, jsx_runtime_1.jsx)("option", { value: o.value, disabled: o.disabled, children: o.label }, o.value)))
                            : children }), (0, jsx_runtime_1.jsx)("span", { className: Select_styles_1.selectClasses.arrow, "aria-hidden": "true" })] })] }));
});
