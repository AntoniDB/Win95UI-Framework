import { forwardRef, useId } from 'react';
import { cx } from '../../utils';
import { sliderClasses as c } from './Slider.styles';
import type { SliderProps } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { label, className, style, id: idProp, min = 0, max = 100, step = 1, ...rest },
  ref
) {
  const autoId = useId();
  const id = idProp ?? `w95-slider-${autoId}`;
  return (
    <div className={cx(c.root, className)} style={style}>
      {label && <label htmlFor={id} className={c.label}>{label}</label>}
      <input ref={ref} id={id} type="range" min={min} max={max} step={step} className={c.input} {...rest} />
    </div>
  );
});
