"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Tabs_styles_1 = require("./Tabs.styles");
exports.Tabs = (0, react_1.forwardRef)(function Tabs({ tabs, value, defaultValue, onChange, className, ...rest }, ref) {
    const [internal, setInternal] = (0, react_1.useState)(defaultValue ?? tabs[0]?.id ?? '');
    const selected = value ?? internal;
    const baseId = (0, react_1.useId)();
    const listRef = (0, react_1.useRef)(null);
    const select = (id) => {
        if (value === undefined)
            setInternal(id);
        onChange?.(id);
    };
    const onKeyDown = (e) => {
        const enabled = tabs.filter((t) => !t.disabled);
        const idx = enabled.findIndex((t) => t.id === selected);
        let next = -1;
        if (e.key === 'ArrowRight')
            next = (idx + 1) % enabled.length;
        else if (e.key === 'ArrowLeft')
            next = (idx - 1 + enabled.length) % enabled.length;
        else if (e.key === 'Home')
            next = 0;
        else if (e.key === 'End')
            next = enabled.length - 1;
        if (next >= 0 && enabled[next]) {
            e.preventDefault();
            select(enabled[next].id);
            const btn = listRef.current?.querySelector(`#${CSS.escape(`${baseId}-tab-${enabled[next].id}`)}`);
            btn?.focus();
        }
    };
    const current = tabs.find((t) => t.id === selected);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cx)(Tabs_styles_1.tabsClasses.root, className), ...rest, children: [(0, jsx_runtime_1.jsx)("div", { ref: listRef, role: "tablist", className: Tabs_styles_1.tabsClasses.list, onKeyDown: onKeyDown, children: tabs.map((t) => {
                    const isSel = t.id === selected;
                    return ((0, jsx_runtime_1.jsx)("button", { id: `${baseId}-tab-${t.id}`, type: "button", role: "tab", "aria-selected": isSel, "aria-controls": `${baseId}-panel-${t.id}`, tabIndex: isSel ? 0 : -1, disabled: t.disabled, className: (0, utils_1.cx)(Tabs_styles_1.tabsClasses.tab, 'w95-focusable', isSel && Tabs_styles_1.tabsClasses.tabSelected), onClick: () => select(t.id), children: t.label }, t.id));
                }) }), (0, jsx_runtime_1.jsx)("div", { id: `${baseId}-panel-${selected}`, role: "tabpanel", "aria-labelledby": `${baseId}-tab-${selected}`, className: Tabs_styles_1.tabsClasses.panel, tabIndex: 0, children: current?.content })] }));
});
