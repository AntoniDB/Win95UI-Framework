import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import { cx } from '../../utils.js';
import { menuClasses as c } from './Menu.styles.js';
function MenuItemRow({ entry, onLeafSelect, }) {
    const [open, setOpen] = useState(false);
    if (entry.separator)
        return _jsx("li", { role: "separator", className: c.separator });
    const hasSub = !!entry.items?.length;
    const activate = () => {
        if (entry.disabled)
            return;
        if (hasSub) {
            setOpen((o) => !o);
            return;
        }
        entry.onSelect?.();
        onLeafSelect?.(entry.id);
    };
    return (_jsxs("li", { role: "menuitem", "aria-disabled": entry.disabled || undefined, "aria-haspopup": hasSub || undefined, "aria-expanded": hasSub ? open : undefined, "data-open": open || undefined, tabIndex: entry.disabled ? -1 : 0, className: cx(c.item, entry.disabled && c.itemDisabled), onClick: activate, onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
            if (hasSub && e.key === 'ArrowRight')
                setOpen(true);
            if (hasSub && e.key === 'ArrowLeft')
                setOpen(false);
        }, onMouseEnter: hasSub ? () => setOpen(true) : undefined, onMouseLeave: hasSub ? () => setOpen(false) : undefined, children: [_jsx("span", { className: c.icon, "aria-hidden": "true", children: entry.icon }), _jsx("span", { className: c.label, children: entry.label }), entry.shortcut && _jsx("span", { className: c.shortcut, children: entry.shortcut }), hasSub && _jsx("span", { className: c.submenuArrow, "aria-hidden": "true", children: '\u25B6' }), hasSub && open && (_jsx("span", { className: c.submenu, children: _jsx(Menu, { items: entry.items ?? [], onSelect: onLeafSelect }) }))] }));
}
export const Menu = forwardRef(function Menu({ items, onSelect, className, ...rest }, ref) {
    return (_jsx("ul", { ref: ref, role: "menu", className: cx(c.menu, className), ...rest, children: items.map((entry, i) => (_jsx(MenuItemRow, { entry: entry, onLeafSelect: onSelect }, entry.id || `sep-${i}`))) }));
});
export const MenuBar = forwardRef(function MenuBar({ menus, onSelect, className, ...rest }, ref) {
    const [openId, setOpenId] = useState(null);
    return (_jsx("div", { ref: ref, role: "menubar", className: cx(c.bar, className), ...rest, children: menus.map((m) => (_jsxs("span", { className: "w95-menubar__anchor", children: [_jsx("button", { type: "button", role: "menuitem", "aria-haspopup": "menu", "aria-expanded": openId === m.id, className: cx(c.barItem, 'w95-focusable', openId === m.id && c.barItemOpen), onClick: () => setOpenId((cur) => (cur === m.id ? null : m.id)), onMouseEnter: () => {
                        if (openId !== null)
                            setOpenId(m.id);
                    }, children: m.label }), openId === m.id && (_jsx("span", { className: c.barPopup, children: _jsx(Menu, { items: m.items, onSelect: (id) => {
                            setOpenId(null);
                            onSelect?.(id);
                        } }) }))] }, m.id))) }));
});
