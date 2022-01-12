/// <reference types="react" />
interface Props {
    type?: 'internal' | 'external';
    children: React.ReactNode;
    href?: string;
}
export declare const Link: ({ type, children, href }: Props) => JSX.Element;
export {};
