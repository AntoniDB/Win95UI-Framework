import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { textFieldClasses as c } from './TextField.styles';
export const TextField = forwardRef(function TextField(props, ref) {
    const { label, error, fullWidth = false, className, style, id: idProp, ...rest } = props;
    const autoId = useId();
    const id = idProp ?? `w95-tf-${autoId}`;
    const errorId = error ? `${id}-error` : undefined;
    const shared = {
        id,
        className: c.input,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': errorId,
    };
    return (_jsxs("div", { className: cx(c.root, fullWidth && c.fullWidth, className), style: style, children: [label && _jsx("label", { htmlFor: id, className: c.label, children: label }), 'multiline' in rest && rest.multiline ? ((() => {
                const { multiline: _m, ...ta } = rest;
                return _jsx("textarea", { ref: ref, ...shared, ...ta });
            })()) : ((() => {
                const { multiline: _m, ...inp } = rest;
                return _jsx("input", { ref: ref, ...shared, ...inp });
            })()), error && _jsx("span", { id: errorId, className: c.error, role: "alert", children: error })] }));
});
