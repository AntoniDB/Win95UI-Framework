import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef } from 'react';
import { Window } from '../Window/index.js';
import { Button } from '../Button/index.js';
import { cx } from '../../utils.js';
import { messageBoxClasses as c } from './MessageBox.styles.js';
import { messageBoxIcons } from './icons.js';
export const MessageBox = forwardRef(function MessageBox({ open, title, children, icon = 'info', buttons = ['OK'], onAction, onClose, className, style }, ref) {
    const firstBtn = useRef(null);
    useEffect(() => {
        if (open)
            firstBtn.current?.focus();
    }, [open]);
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
    return (_jsx("div", { ref: ref, className: cx(c.overlay, className), style: style, role: "alertdialog", "aria-modal": "true", "aria-label": title, children: _jsxs(Window, { title: title, closable: true, onClose: onClose, children: [_jsxs("div", { className: c.content, children: [_jsx("span", { className: c.icon, children: messageBoxIcons[icon] }), _jsx("div", { className: c.text, children: children })] }), _jsx("div", { className: c.buttons, children: buttons.map((label, i) => (_jsx(Button, { ref: i === 0 ? firstBtn : undefined, primary: i === 0, onClick: () => {
                            onAction?.(label);
                            onClose?.();
                        }, children: label }, label))) })] }) }));
});
