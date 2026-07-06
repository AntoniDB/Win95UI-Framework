"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const utils_1 = require("../../utils");
const TextField_styles_1 = require("./TextField.styles");
exports.TextField = (0, react_1.forwardRef)(function TextField(props, ref) {
    const { label, error, fullWidth = false, className, style, id: idProp, ...rest } = props;
    const autoId = (0, react_1.useId)();
    const id = idProp ?? `w95-tf-${autoId}`;
    const errorId = error ? `${id}-error` : undefined;
    const shared = {
        id,
        className: TextField_styles_1.textFieldClasses.input,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': errorId,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cx)(TextField_styles_1.textFieldClasses.root, fullWidth && TextField_styles_1.textFieldClasses.fullWidth, className), style: style, children: [label && (0, jsx_runtime_1.jsx)("label", { htmlFor: id, className: TextField_styles_1.textFieldClasses.label, children: label }), 'multiline' in rest && rest.multiline ? ((() => {
                const { multiline: _m, ...ta } = rest;
                return (0, jsx_runtime_1.jsx)("textarea", { ref: ref, ...shared, ...ta });
            })()) : ((() => {
                const { multiline: _m, ...inp } = rest;
                return (0, jsx_runtime_1.jsx)("input", { ref: ref, ...shared, ...inp });
            })()), error && (0, jsx_runtime_1.jsx)("span", { id: errorId, className: TextField_styles_1.textFieldClasses.error, role: "alert", children: error })] }));
});
