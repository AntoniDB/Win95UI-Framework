import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { checkboxClasses as c } from './Checkbox.styles';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, style, id: idProp, ...rest },
  ref
) {
  const autoId = useId();
  const id = idProp ?? `w95-cb-${autoId}`;
  return (
    <label className={cx(c.root, className)} style={style} htmlFor={id}>
      <input ref={ref} id={id} type="checkbox" className={c.input} {...rest} />
      <span className={c.box} aria-hidden="true" />
      {label && <span className={c.label}>{label}</span>}
    </label>
  );
});
