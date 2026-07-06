"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Badge_styles_1 = require("./Badge.styles");
exports.Badge = (0, react_1.forwardRef)(function Badge({ variant = 'raised', onDelete, className, children, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsxs)("span", { ref: ref, className: (0, utils_1.cx)(Badge_styles_1.badgeClasses.root, variant === 'sunken' && Badge_styles_1.badgeClasses.sunken, className), ...rest, children: [children, onDelete && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: Badge_styles_1.badgeClasses.delete, "aria-label": "Remove", onClick: onDelete, children: "x" }))] }));
});
