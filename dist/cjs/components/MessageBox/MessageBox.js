"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Window_1 = require("../Window");
const Button_1 = require("../Button");
const utils_1 = require("../../utils");
const MessageBox_styles_1 = require("./MessageBox.styles");
const icons_1 = require("./icons");
exports.MessageBox = (0, react_1.forwardRef)(function MessageBox({ open, title, children, icon = 'info', buttons = ['OK'], onAction, onClose, className, style }, ref) {
    const firstBtn = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (open)
            firstBtn.current?.focus();
    }, [open]);
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
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cx)(MessageBox_styles_1.messageBoxClasses.overlay, className), style: style, role: "alertdialog", "aria-modal": "true", "aria-label": title, children: (0, jsx_runtime_1.jsxs)(Window_1.Window, { title: title, closable: true, onClose: onClose, children: [(0, jsx_runtime_1.jsxs)("div", { className: MessageBox_styles_1.messageBoxClasses.content, children: [(0, jsx_runtime_1.jsx)("span", { className: MessageBox_styles_1.messageBoxClasses.icon, children: icons_1.messageBoxIcons[icon] }), (0, jsx_runtime_1.jsx)("div", { className: MessageBox_styles_1.messageBoxClasses.text, children: children })] }), (0, jsx_runtime_1.jsx)("div", { className: MessageBox_styles_1.messageBoxClasses.buttons, children: buttons.map((label, i) => ((0, jsx_runtime_1.jsx)(Button_1.Button, { ref: i === 0 ? firstBtn : undefined, primary: i === 0, onClick: () => {
                            onAction?.(label);
                            onClose?.();
                        }, children: label }, label))) })] }) }));
});
