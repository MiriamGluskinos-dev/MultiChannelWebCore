import React from 'react';
import { Accordion as AccordionWC } from '@igds/core-web/accordion';
declare const Accordion: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<AccordionWC>, "multiexpand" | "accordionItemsSlot" | "assignedAccordionItems" | "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete"> & {} & Partial<Omit<AccordionWC, keyof HTMLElement>> & React.RefAttributes<AccordionWC>, "ref"> & React.RefAttributes<AccordionWC>>;
export { Accordion, AccordionWC };
