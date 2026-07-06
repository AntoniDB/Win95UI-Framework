"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const GroupBox_styles_1 = require("./GroupBox.styles");
exports.GroupBox = (0, react_1.forwardRef)(function GroupBox({ label, className, children, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsxs)("fieldset", { ref: ref, className: (0, utils_1.cx)(GroupBox_styles_1.groupBoxClasses.root, className), ...rest, children: [label && (0, jsx_runtime_1.jsx)("legend", { className: GroupBox_styles_1.groupBoxClasses.legend, children: label }), children] }));
});
