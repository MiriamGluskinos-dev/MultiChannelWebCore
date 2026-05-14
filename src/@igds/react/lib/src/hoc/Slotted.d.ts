import { ReactNode } from 'react';
interface ISlotted {
    slot?: string;
    children?: ReactNode;
    isContents?: boolean;
}
export declare const Slotted: import("react").ForwardRefExoticComponent<ISlotted & import("react").RefAttributes<HTMLDivElement>>;
export {};
