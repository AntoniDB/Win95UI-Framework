"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Menu_1 = require("../Menu");
const utils_1 = require("../../utils");
const StartMenu_styles_1 = require("./StartMenu.styles");
exports.StartMenu = (0, react_1.forwardRef)(function StartMenu({ open, items, onSelect, onClose, brand = 'Windows 95', className, ...rest }, ref) {
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cx)(StartMenu_styles_1.startMenuClasses.root, className), role: "menu", "aria-label": "Start menu", ...rest, children: [(0, jsx_runtime_1.jsx)("span", { className: StartMenu_styles_1.startMenuClasses.band, "aria-hidden": "true", children: brand }), (0, jsx_runtime_1.jsx)(Menu_1.Menu, { className: StartMenu_styles_1.startMenuClasses.menu, items: items, onSelect: (id) => {
                    onSelect?.(id);
                    onClose?.();
                } })] }));
});
