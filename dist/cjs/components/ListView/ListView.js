"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const ListView_styles_1 = require("./ListView.styles");
exports.ListView = (0, react_1.forwardRef)(function ListView({ items, selectedId, defaultSelectedId, onSelect, height, className, style, ...rest }, ref) {
    const [internal, setInternal] = (0, react_1.useState)(defaultSelectedId);
    const selected = selectedId ?? internal;
    const select = (id) => {
        if (selectedId === undefined)
            setInternal(id);
        onSelect?.(id);
    };
    const onKeyDown = (e) => {
        const enabled = items.filter((i) => !i.disabled);
        const idx = enabled.findIndex((i) => i.id === selected);
        if (e.key === 'ArrowDown' && idx < enabled.length - 1) {
            e.preventDefault();
            const target = enabled[idx + 1];
            if (target)
                select(target.id);
        }
        if (e.key === 'ArrowUp' && idx > 0) {
            e.preventDefault();
            const target = enabled[idx - 1];
            if (target)
                select(target.id);
        }
    };
    return ((0, jsx_runtime_1.jsx)("ul", { ref: ref, role: "listbox", tabIndex: 0, "aria-activedescendant": selected ? `w95-lv-${selected}` : undefined, className: (0, utils_1.cx)(ListView_styles_1.listViewClasses.root, className), style: { height, ...style }, onKeyDown: onKeyDown, ...rest, children: items.map((item) => ((0, jsx_runtime_1.jsxs)("li", { id: `w95-lv-${item.id}`, role: "option", "aria-selected": item.id === selected, "aria-disabled": item.disabled || undefined, className: (0, utils_1.cx)(ListView_styles_1.listViewClasses.item, item.id === selected && ListView_styles_1.listViewClasses.itemSelected, item.disabled && ListView_styles_1.listViewClasses.itemDisabled), onClick: () => !item.disabled && select(item.id), children: [item.icon && (0, jsx_runtime_1.jsx)("span", { className: ListView_styles_1.listViewClasses.icon, "aria-hidden": "true", children: item.icon }), item.label] }, item.id))) }));
});
