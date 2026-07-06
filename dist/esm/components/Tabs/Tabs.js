import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useState } from 'react';
import { cx } from '../../utils';
import { tabsClasses as c } from './Tabs.styles';
export const Tabs = forwardRef(function Tabs({ tabs, value, defaultValue, onChange, className, ...rest }, ref) {
    const [internal, setInternal] = useState(defaultValue ?? tabs[0]?.id ?? '');
    const selected = value ?? internal;
    const baseId = useId();
    const listRef = useRef(null);
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
    return (_jsxs("div", { ref: ref, className: cx(c.root, className), ...rest, children: [_jsx("div", { ref: listRef, role: "tablist", className: c.list, onKeyDown: onKeyDown, children: tabs.map((t) => {
                    const isSel = t.id === selected;
                    return (_jsx("button", { id: `${baseId}-tab-${t.id}`, type: "button", role: "tab", "aria-selected": isSel, "aria-controls": `${baseId}-panel-${t.id}`, tabIndex: isSel ? 0 : -1, disabled: t.disabled, className: cx(c.tab, 'w95-focusable', isSel && c.tabSelected), onClick: () => select(t.id), children: t.label }, t.id));
                }) }), _jsx("div", { id: `${baseId}-panel-${selected}`, role: "tabpanel", "aria-labelledby": `${baseId}-tab-${selected}`, className: c.panel, tabIndex: 0, children: current?.content })] }));
});
