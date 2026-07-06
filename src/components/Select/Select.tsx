import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { selectClasses as c } from './Select.styles';
import type { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, fullWidth = false, className, style, id: idProp, children, ...rest },
  ref
) {
  const autoId = useId();
  const id = idProp ?? `w95-sel-${autoId}`;
  return (
    <div className={cx(c.root, fullWidth && c.fullWidth, className)} style={style}>
      {label && <label htmlFor={id} className={c.label}>{label}</label>}
      <span className={c.wrap}>
        <select ref={ref} id={id} className={c.native} {...rest}>
          {options
            ? options.map((o) => (
                <option key={o.value} value={o.value} disabled={o.disabled}>
                  {o.label}
                </option>
              ))
            : children}
        </select>
        <span className={c.arrow} aria-hidden="true" />
      </span>
    </div>
  );
});
