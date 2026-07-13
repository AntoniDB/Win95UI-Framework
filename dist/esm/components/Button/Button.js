import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cx } from '../../utils.js';
import { buttonClasses as c } from './Button.styles.js';
export const Button = forwardRef(function Button({ variant = 'default', primary = false, fullWidth = false, className, disabled, children, ...rest }, ref) {
    const isDisabled = disabled || variant === 'disabled';
    return (_jsx("button", { ref: ref, type: "button", disabled: isDisabled, className: cx(c.root, 'w95-focusable', variant === 'active' && c.active, primary && c.primary, fullWidth && c.fullWidth, className), ...rest, children: children }));
});
