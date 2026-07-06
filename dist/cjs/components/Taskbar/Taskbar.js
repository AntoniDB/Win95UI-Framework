"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taskbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Button_1 = require("../Button");
const utils_1 = require("../../utils");
const Taskbar_styles_1 = require("./Taskbar.styles");
function Clock() {
    const [now, setNow] = (0, react_1.useState)(() => new Date());
    (0, react_1.useEffect)(() => {
        const t = setInterval(() => setNow(new Date()), 1000 * 15);
        return () => clearInterval(t);
    }, []);
    const hh = now.getHours();
    const mm = now.getMinutes().toString().padStart(2, '0');
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    const ampm = hh < 12 ? 'AM' : 'PM';
    return ((0, jsx_runtime_1.jsxs)("span", { className: "w95-taskbar__clock", role: "timer", "aria-label": "Clock", children: [h12, ":", mm, " ", ampm] }));
}
exports.Taskbar = (0, react_1.forwardRef)(function Taskbar({ startLabel = 'Start', startActive = false, onStartClick, showClock = true, fixed = false, className, children, ...rest }, ref) {
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: (0, utils_1.cx)(Taskbar_styles_1.taskbarClasses.root, fixed && Taskbar_styles_1.taskbarClasses.fixed, className), ...rest, children: [(0, jsx_runtime_1.jsxs)(Button_1.Button, { className: (0, utils_1.cx)(Taskbar_styles_1.taskbarClasses.start, startActive && Taskbar_styles_1.taskbarClasses.startActive), variant: startActive ? 'active' : 'default', onClick: onStartClick, "aria-haspopup": "menu", "aria-expanded": startActive, children: [(0, jsx_runtime_1.jsxs)("svg", { width: "16", height: "14", viewBox: "0 0 16 14", "aria-hidden": "true", style: { shapeRendering: 'crispEdges' }, children: [(0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", width: "7", height: "6", fill: "#FF0000" }), (0, jsx_runtime_1.jsx)("rect", { x: "9", y: "0", width: "7", height: "6", fill: "#00A000" }), (0, jsx_runtime_1.jsx)("rect", { x: "0", y: "8", width: "7", height: "6", fill: "#0000FF" }), (0, jsx_runtime_1.jsx)("rect", { x: "9", y: "8", width: "7", height: "6", fill: "#FFD000" })] }), startLabel] }), (0, jsx_runtime_1.jsx)("div", { className: Taskbar_styles_1.taskbarClasses.items, children: children }), showClock && (0, jsx_runtime_1.jsx)(Clock, {})] }));
});
