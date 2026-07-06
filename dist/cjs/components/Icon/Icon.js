"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Icon_styles_1 = require("./Icon.styles");
exports.Icon = (0, react_1.forwardRef)(function Icon({ image, label, selected = false, onDesktop = false, className, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, tabIndex: 0, className: (0, utils_1.cx)(Icon_styles_1.iconClasses.root, onDesktop && Icon_styles_1.iconClasses.onDesktop, className), ...rest, children: [(0, jsx_runtime_1.jsx)("span", { className: Icon_styles_1.iconClasses.image, "aria-hidden": "true", children: image }), label && (0, jsx_runtime_1.jsx)("span", { className: (0, utils_1.cx)(Icon_styles_1.iconClasses.label, selected && Icon_styles_1.iconClasses.labelSelected), children: label })] }));
});
