"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Button_styles_1 = require("./Button.styles");
exports.Button = (0, react_1.forwardRef)(function Button({ variant = 'default', primary = false, fullWidth = false, className, disabled, children, ...rest }, ref) {
    const isDisabled = disabled || variant === 'disabled';
    return ((0, jsx_runtime_1.jsx)("button", { ref: ref, type: "button", disabled: isDisabled, className: (0, utils_1.cx)(Button_styles_1.buttonClasses.root, 'w95-focusable', variant === 'active' && Button_styles_1.buttonClasses.active, primary && Button_styles_1.buttonClasses.primary, fullWidth && Button_styles_1.buttonClasses.fullWidth, className), ...rest, children: children }));
});
