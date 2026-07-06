"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const Window_styles_1 = require("./Window.styles");
exports.Window = (0, react_1.forwardRef)(function Window({ title, icon, active = true, minimizable = false, maximizable = false, closable = false, onMinimize, onMaximize, onClose, draggable95 = false, width, height, className, style, children, ...rest }, ref) {
    const [offset, setOffset] = (0, react_1.useState)({ x: 0, y: 0 });
    const dragState = (0, react_1.useRef)(null);
    const onPointerDown = (0, react_1.useCallback)((e) => {
        if (!draggable95)
            return;
        if (e.target.closest('button'))
            return;
        dragState.current = { startX: e.clientX, startY: e.clientY, baseX: offset.x, baseY: offset.y };
        e.currentTarget.setPointerCapture(e.pointerId);
    }, [draggable95, offset]);
    const onPointerMove = (0, react_1.useCallback)((e) => {
        const d = dragState.current;
        if (!d)
            return;
        setOffset({ x: d.baseX + e.clientX - d.startX, y: d.baseY + e.clientY - d.startY });
    }, []);
    const onPointerUp = (0, react_1.useCallback)(() => {
        dragState.current = null;
    }, []);
    const mergedStyle = {
        width,
        height,
        ...(draggable95 ? { transform: `translate(${offset.x}px, ${offset.y}px)` } : null),
        ...style,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, role: "dialog", "aria-label": typeof title === 'string' ? title : undefined, className: (0, utils_1.cx)(Window_styles_1.windowClasses.root, className), style: mergedStyle, ...rest, children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cx)(Window_styles_1.windowClasses.titlebar, !active && Window_styles_1.windowClasses.titlebarInactive), onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp, style: draggable95 ? { cursor: 'move', touchAction: 'none' } : undefined, children: [icon && (0, jsx_runtime_1.jsx)("span", { className: Window_styles_1.windowClasses.icon, "aria-hidden": "true", children: icon }), (0, jsx_runtime_1.jsx)("span", { className: Window_styles_1.windowClasses.title, children: title }), (0, jsx_runtime_1.jsxs)("span", { className: Window_styles_1.windowClasses.controls, children: [minimizable && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: Window_styles_1.windowClasses.controlBtn, "aria-label": "Minimize", onClick: onMinimize, children: "_" })), maximizable && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: Window_styles_1.windowClasses.controlBtn, "aria-label": "Maximize", onClick: onMaximize, children: '\u25A1' })), closable && ((0, jsx_runtime_1.jsx)("button", { type: "button", className: Window_styles_1.windowClasses.controlBtn, "aria-label": "Close", onClick: onClose, children: '\u00D7' }))] })] }), (0, jsx_runtime_1.jsx)("div", { className: Window_styles_1.windowClasses.body, children: children })] }));
});
