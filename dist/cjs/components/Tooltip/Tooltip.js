"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Tooltip_styles_1 = require("./Tooltip.styles");
exports.Tooltip = (0, react_1.forwardRef)(function Tooltip({ content, children, placement = 'bottom', className, ...rest }, ref) {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const id = (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsxs)("span", { ref: ref, className: (0, utils_1.cx)(Tooltip_styles_1.tooltipClasses.root, className), onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), onFocus: () => setVisible(true), onBlur: () => setVisible(false), "aria-describedby": visible ? id : undefined, ...rest, children: [children, visible && ((0, jsx_runtime_1.jsx)("span", { id: id, role: "tooltip", className: (0, utils_1.cx)(Tooltip_styles_1.tooltipClasses.bubble, placement === 'top' ? Tooltip_styles_1.tooltipClasses.top : Tooltip_styles_1.tooltipClasses.bottom), children: content }))] }));
});
