import type { FieldsetHTMLAttributes, ReactNode } from 'react';
export interface GroupBoxProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label?: ReactNode;
}
