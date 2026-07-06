"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Switch_styles_1 = require("./Switch.styles");
exports.Switch = (0, react_1.forwardRef)(function Switch({ label, onLabel = 'I', offLabel = 'O', className, style, id: idProp, ...rest }, ref) {
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-switch-${autoId}`;
    return ((0, jsx_runtime_1.jsxs)("label", { className: (0, utils_1.cx)(Switch_styles_1.switchClasses.root, className), style: style, htmlFor: id, children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, id: id, type: "checkbox", role: "switch", className: Switch_styles_1.switchClasses.input, ...rest }), (0, jsx_runtime_1.jsxs)("span", { className: Switch_styles_1.switchClasses.track, "aria-hidden": "true", children: [(0, jsx_runtime_1.jsx)("span", { className: `${Switch_styles_1.switchClasses.side} w95-switch__side--off`, children: offLabel }), (0, jsx_runtime_1.jsx)("span", { className: `${Switch_styles_1.switchClasses.side} w95-switch__side--on`, children: onLabel }), (0, jsx_runtime_1.jsx)("span", { className: Switch_styles_1.switchClasses.thumb })] }), label && (0, jsx_runtime_1.jsx)("span", { className: Switch_styles_1.switchClasses.label, children: label })] }));
});
