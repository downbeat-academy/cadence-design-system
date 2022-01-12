/// <reference types="react" />
interface Props {
    color?: string;
    type: 'symbol' | 'text' | 'lockup';
    width?: string;
}
export declare const Logo: ({ width, color, type }: Props) => JSX.Element;
export {};
