"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourglassCursor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const HourglassCursor_styles_1 = require("./HourglassCursor.styles");
exports.HourglassCursor = (0, react_1.forwardRef)(function HourglassCursor({ size = 22, label, className, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsxs)("span", { ref: ref, role: "status", "aria-label": label ?? 'Working', className: (0, utils_1.cx)(HourglassCursor_styles_1.hourglassClasses.root, className), ...rest, children: [(0, jsx_runtime_1.jsx)("span", { className: HourglassCursor_styles_1.hourglassClasses.glyph, "aria-hidden": "true", children: (0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 13 16", style: { shapeRendering: 'crispEdges' }, children: [(0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", width: "13", height: "2", fill: "#000000" }), (0, jsx_runtime_1.jsx)("rect", { x: "0", y: "14", width: "13", height: "2", fill: "#000000" }), (0, jsx_runtime_1.jsx)("rect", { x: "2", y: "2", width: "9", height: "1", fill: "#808080" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 3 L11 3 L11 5 L8 8 L11 11 L11 13 L2 13 L2 11 L5 8 L2 5 Z", fill: "#FFFFFF", stroke: "#000000", strokeWidth: "1" }), (0, jsx_runtime_1.jsx)("path", { d: "M4 4 L9 4 L9 5 L6.5 7.5 L4 5 Z", fill: "#00AEEF" }), (0, jsx_runtime_1.jsx)("path", { d: "M4 12 L9 12 L9 11 L6.5 9.5 L4 11 Z", fill: "#00AEEF" })] }) }), label && (0, jsx_runtime_1.jsx)("span", { className: HourglassCursor_styles_1.hourglassClasses.label, children: label })] }));
});
