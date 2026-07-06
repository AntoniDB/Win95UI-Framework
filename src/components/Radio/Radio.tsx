import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { radioClasses as c } from './Radio.styles';
import type { RadioProps } from './Radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, className, style, id: idProp, ...rest },
  ref
) {
  const autoId = useId();
  const id = idProp ?? `w95-radio-${autoId}`;
  return (
    <label className={cx(c.root, className)} style={style} htmlFor={id}>
      <input ref={ref} id={id} type="radio" className={c.input} {...rest} />
      <span className={c.circle} aria-hidden="true" />
      {label && <span className={c.label}>{label}</span>}
    </label>
  );
});
