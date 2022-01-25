/// <reference types="react" />
interface Props {
    label?: string;
    placeholder?: string;
    type?: any;
    name: string;
    helperText?: string;
    disabled?: boolean;
    inputType: 'input' | 'textarea';
    messageRows?: number;
}
export declare const InputField: ({ label, placeholder, type, name, helperText, inputType, messageRows, }: Props) => JSX.Element;
export {};
