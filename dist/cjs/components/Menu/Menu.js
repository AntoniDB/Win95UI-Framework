"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBar = exports.Menu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Menu_styles_1 = require("./Menu.styles");
function MenuItemRow({ entry, onLeafSelect, }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    if (entry.separator)
        return (0, jsx_runtime_1.jsx)("li", { role: "separator", className: Menu_styles_1.menuClasses.separator });
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
    return ((0, jsx_runtime_1.jsxs)("li", { role: "menuitem", "aria-disabled": entry.disabled || undefined, "aria-haspopup": hasSub || undefined, "aria-expanded": hasSub ? open : undefined, "data-open": open || undefined, tabIndex: entry.disabled ? -1 : 0, className: (0, utils_1.cx)(Menu_styles_1.menuClasses.item, entry.disabled && Menu_styles_1.menuClasses.itemDisabled), onClick: activate, onKeyDown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
            if (hasSub && e.key === 'ArrowRight')
                setOpen(true);
            if (hasSub && e.key === 'ArrowLeft')
                setOpen(false);
        }, onMouseEnter: hasSub ? () => setOpen(true) : undefined, onMouseLeave: hasSub ? () => setOpen(false) : undefined, children: [(0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.icon, "aria-hidden": "true", children: entry.icon }), (0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.label, children: entry.label }), entry.shortcut && (0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.shortcut, children: entry.shortcut }), hasSub && (0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.submenuArrow, "aria-hidden": "true", children: '\u25B6' }), hasSub && open && ((0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.submenu, children: (0, jsx_runtime_1.jsx)(exports.Menu, { items: entry.items ?? [], onSelect: onLeafSelect }) }))] }));
}
exports.Menu = (0, react_1.forwardRef)(function Menu({ items, onSelect, className, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsx)("ul", { ref: ref, role: "menu", className: (0, utils_1.cx)(Menu_styles_1.menuClasses.menu, className), ...rest, children: items.map((entry, i) => ((0, jsx_runtime_1.jsx)(MenuItemRow, { entry: entry, onLeafSelect: onSelect }, entry.id || `sep-${i}`))) }));
});
exports.MenuBar = (0, react_1.forwardRef)(function MenuBar({ menus, onSelect, className, ...rest }, ref) {
    const [openId, setOpenId] = (0, react_1.useState)(null);
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, role: "menubar", className: (0, utils_1.cx)(Menu_styles_1.menuClasses.bar, className), ...rest, children: menus.map((m) => ((0, jsx_runtime_1.jsxs)("span", { className: "w95-menubar__anchor", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", role: "menuitem", "aria-haspopup": "menu", "aria-expanded": openId === m.id, className: (0, utils_1.cx)(Menu_styles_1.menuClasses.barItem, 'w95-focusable', openId === m.id && Menu_styles_1.menuClasses.barItemOpen), onClick: () => setOpenId((cur) => (cur === m.id ? null : m.id)), onMouseEnter: () => {
                        if (openId !== null)
                            setOpenId(m.id);
                    }, children: m.label }), openId === m.id && ((0, jsx_runtime_1.jsx)("span", { className: Menu_styles_1.menuClasses.barPopup, children: (0, jsx_runtime_1.jsx)(exports.Menu, { items: m.items, onSelect: (id) => {
                            setOpenId(null);
                            onSelect?.(id);
                        } }) }))] }, m.id))) }));
});
