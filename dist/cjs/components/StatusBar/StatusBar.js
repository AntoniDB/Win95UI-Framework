"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const StatusBar_styles_1 = require("./StatusBar.styles");
exports.StatusBar = (0, react_1.forwardRef)(function StatusBar({ panels, className, children, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, role: "status", className: (0, utils_1.cx)(StatusBar_styles_1.statusBarClasses.root, className), ...rest, children: panels
            ? panels.map((p, i) => ((0, jsx_runtime_1.jsx)("span", { className: StatusBar_styles_1.statusBarClasses.panel, children: p }, i)))
            : children }));
});
