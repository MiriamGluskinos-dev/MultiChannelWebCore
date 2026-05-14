import React from 'react';
import { AccordionItem as AccordionItemWC } from '@igds/core-web/accordion';
export type AccordionItemProps = {
    onToggle?: (event: ToggleEvent) => void;
    icon?: string;
    header?: string;
    children: React.ReactNode;
    isOpen?: boolean;
    disabled?: boolean;
};
declare const AccordionItem: ({ onToggle, icon, header, children, isOpen, disabled, ...restProps }: AccordionItemProps) => import("react/jsx-runtime").JSX.Element;
export { AccordionItem, AccordionItemWC };
