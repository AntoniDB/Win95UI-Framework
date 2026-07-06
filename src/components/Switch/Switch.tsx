import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { switchClasses as c } from './Switch.styles';
import type { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, onLabel = 'I', offLabel = 'O', className, style, id: idProp, ...rest },
  ref
) {
  const autoId = useId();
  const id = idProp ?? `w95-switch-${autoId}`;
  return (
    <label className={cx(c.root, className)} style={style} htmlFor={id}>
      <input ref={ref} id={id} type="checkbox" role="switch" className={c.input} {...rest} />
      <span className={c.track} aria-hidden="true">
        <span className={`${c.side} w95-switch__side--off`}>{offLabel}</span>
        <span className={`${c.side} w95-switch__side--on`}>{onLabel}</span>
        <span className={c.thumb} />
      </span>
      {label && <span className={c.label}>{label}</span>}
    </label>
  );
});
