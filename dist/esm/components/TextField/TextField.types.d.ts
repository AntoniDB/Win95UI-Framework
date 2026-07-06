import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
interface TextFieldBase {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}
export interface TextFieldInputProps extends TextFieldBase, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    multiline?: false;
}
export interface TextFieldTextareaProps extends TextFieldBase, TextareaHTMLAttributes<HTMLTextAreaElement> {
    multiline: true;
    rows?: number;
}
export type TextFieldProps = TextFieldInputProps | TextFieldTextareaProps;
export {};
