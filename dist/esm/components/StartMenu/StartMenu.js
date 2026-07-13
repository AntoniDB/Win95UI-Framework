import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect } from 'react';
import { Menu } from '../Menu/index.js';
import { cx } from '../../utils.js';
import { startMenuClasses as c } from './StartMenu.styles.js';
export const StartMenu = forwardRef(function StartMenu({ open, items, onSelect, onClose, brand = 'Windows 95', className, ...rest }, ref) {
    useEffect(() => {
        if (!open)
            return;
        const onKey = (e) => {
            if (e.key === 'Escape')
                onClose?.();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);
    if (!open)
        return null;
    return (_jsxs("div", { ref: ref, className: cx(c.root, className), role: "menu", "aria-label": "Start menu", ...rest, children: [_jsx("span", { className: c.band, "aria-hidden": "true", children: brand }), _jsx(Menu, { className: c.menu, items: items, onSelect: (id) => {
                    onSelect?.(id);
                    onClose?.();
                } })] }));
});
