import React, { ComponentProps } from 'react';
import { DynamicIcon as DynamicIconWC } from '@igds/core-web/dynamic-icon';
declare const DynamicIconComponent: import("@lit/react").ReactWebComponent<DynamicIconWC, {}>;
type DynamicIconProps = ComponentProps<typeof DynamicIconComponent>;
declare const DynamicIcon: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<DynamicIconWC>, "color" | "connectedCallback" | "disconnectedCallback" | "render" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "size" | "name" | "accessibleName"> & {} & Partial<Omit<DynamicIconWC, keyof HTMLElement>> & React.RefAttributes<DynamicIconWC>, "ref"> & React.RefAttributes<DynamicIconWC>>;
export { DynamicIcon, DynamicIconWC };
export type { DynamicIconProps };
