"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const ProgressBar_styles_1 = require("./ProgressBar.styles");
const TOTAL_BLOCKS = 18;
exports.ProgressBar = (0, react_1.forwardRef)(function ProgressBar({ value, showLabel = false, width, className, style, ...rest }, ref) {
    const clamped = Math.max(0, Math.min(100, value));
    const filled = Math.round((clamped / 100) * TOTAL_BLOCKS);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": clamped, className: (0, utils_1.cx)(ProgressBar_styles_1.progressClasses.root, className), style: { width, ...style }, ...rest, children: [(0, jsx_runtime_1.jsx)("div", { className: ProgressBar_styles_1.progressClasses.blocks, "aria-hidden": "true", children: Array.from({ length: TOTAL_BLOCKS }, (_, i) => ((0, jsx_runtime_1.jsx)("span", { className: ProgressBar_styles_1.progressClasses.block, style: { visibility: i < filled ? 'visible' : 'hidden' } }, i))) }), showLabel && (0, jsx_runtime_1.jsxs)("span", { className: ProgressBar_styles_1.progressClasses.label, children: [clamped, "%"] })] }));
});
