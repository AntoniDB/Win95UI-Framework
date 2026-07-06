import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useRef, useState } from 'react';
import { cx } from '../../utils';
import { windowClasses as c } from './Window.styles';
export const Window = forwardRef(function Window({ title, icon, active = true, minimizable = false, maximizable = false, closable = false, onMinimize, onMaximize, onClose, draggable95 = false, width, height, className, style, children, ...rest }, ref) {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const dragState = useRef(null);
    const onPointerDown = useCallback((e) => {
        if (!draggable95)
            return;
        if (e.target.closest('button'))
            return;
        dragState.current = { startX: e.clientX, startY: e.clientY, baseX: offset.x, baseY: offset.y };
        e.currentTarget.setPointerCapture(e.pointerId);
    }, [draggable95, offset]);
    const onPointerMove = useCallback((e) => {
        const d = dragState.current;
        if (!d)
            return;
        setOffset({ x: d.baseX + e.clientX - d.startX, y: d.baseY + e.clientY - d.startY });
    }, []);
    const onPointerUp = useCallback(() => {
        dragState.current = null;
    }, []);
    const mergedStyle = {
        width,
        height,
        ...(draggable95 ? { transform: `translate(${offset.x}px, ${offset.y}px)` } : null),
        ...style,
    };
    return (_jsxs("div", { ref: ref, role: "dialog", "aria-label": typeof title === 'string' ? title : undefined, className: cx(c.root, className), style: mergedStyle, ...rest, children: [_jsxs("div", { className: cx(c.titlebar, !active && c.titlebarInactive), onPointerDown: onPointerDown, onPointerMove: onPointerMove, onPointerUp: onPointerUp, style: draggable95 ? { cursor: 'move', touchAction: 'none' } : undefined, children: [icon && _jsx("span", { className: c.icon, "aria-hidden": "true", children: icon }), _jsx("span", { className: c.title, children: title }), _jsxs("span", { className: c.controls, children: [minimizable && (_jsx("button", { type: "button", className: c.controlBtn, "aria-label": "Minimize", onClick: onMinimize, children: "_" })), maximizable && (_jsx("button", { type: "button", className: c.controlBtn, "aria-label": "Maximize", onClick: onMaximize, children: '\u25A1' })), closable && (_jsx("button", { type: "button", className: c.controlBtn, "aria-label": "Close", onClick: onClose, children: '\u00D7' }))] })] }), _jsx("div", { className: c.body, children: children })] }));
});
