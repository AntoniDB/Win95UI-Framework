import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { textFieldClasses as c } from './TextField.styles';
import type { TextFieldProps } from './TextField.types';

export const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  function TextField(props, ref) {
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
    return (
      <div className={cx(c.root, fullWidth && c.fullWidth, className)} style={style}>
        {label && <label htmlFor={id} className={c.label}>{label}</label>}
        {'multiline' in rest && rest.multiline ? (
          (() => {
            const { multiline: _m, ...ta } = rest;
            return <textarea ref={ref as React.Ref<HTMLTextAreaElement>} {...shared} {...ta} />;
          })()
        ) : (
          (() => {
            const { multiline: _m, ...inp } = rest as Extract<TextFieldProps, { multiline?: false }>;
            return <input ref={ref as React.Ref<HTMLInputElement>} {...shared} {...inp} />;
          })()
        )}
        {error && <span id={errorId} className={c.error} role="alert">{error}</span>}
      </div>
    );
  }
);
