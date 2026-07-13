import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useState } from 'react';
import { Button } from '../Button/index.js';
import { cx } from '../../utils.js';
import { taskbarClasses as c } from './Taskbar.styles.js';
function Clock() {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 1000 * 15);
        return () => clearInterval(t);
    }, []);
    const hh = now.getHours();
    const mm = now.getMinutes().toString().padStart(2, '0');
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    const ampm = hh < 12 ? 'AM' : 'PM';
    return (_jsxs("span", { className: "w95-taskbar__clock", role: "timer", "aria-label": "Clock", children: [h12, ":", mm, " ", ampm] }));
}
export const Taskbar = forwardRef(function Taskbar({ startLabel = 'Start', startActive = false, onStartClick, showClock = true, fixed = false, className, children, ...rest }, ref) {
    return (_jsxs("div", { ref: ref, className: cx(c.root, fixed && c.fixed, className), ...rest, children: [_jsxs(Button, { className: cx(c.start, startActive && c.startActive), variant: startActive ? 'active' : 'default', onClick: onStartClick, "aria-haspopup": "menu", "aria-expanded": startActive, children: [_jsxs("svg", { width: "16", height: "14", viewBox: "0 0 16 14", "aria-hidden": "true", style: { shapeRendering: 'crispEdges' }, children: [_jsx("rect", { x: "0", y: "0", width: "7", height: "6", fill: "#FF0000" }), _jsx("rect", { x: "9", y: "0", width: "7", height: "6", fill: "#00A000" }), _jsx("rect", { x: "0", y: "8", width: "7", height: "6", fill: "#0000FF" }), _jsx("rect", { x: "9", y: "8", width: "7", height: "6", fill: "#FFD000" })] }), startLabel] }), _jsx("div", { className: c.items, children: children }), showClock && _jsx(Clock, {})] }));
});
