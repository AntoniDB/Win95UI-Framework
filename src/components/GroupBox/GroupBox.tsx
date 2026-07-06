import { forwardRef } from 'react';
import { cx } from '../../utils';
import { groupBoxClasses as c } from './GroupBox.styles';
import type { GroupBoxProps } from './GroupBox.types';

export const GroupBox = forwardRef<HTMLFieldSetElement, GroupBoxProps>(function GroupBox(
  { label, className, children, ...rest },
  ref
) {
  return (
    <fieldset ref={ref} className={cx(c.root, className)} {...rest}>
      {label && <legend className={c.legend}>{label}</legend>}
      {children}
    </fieldset>
  );
});
