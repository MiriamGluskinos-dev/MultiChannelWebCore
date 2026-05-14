import React from 'react';
import { Badge as BadgeWC } from '@igds/core-web/badge';
declare const Badge: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<BadgeWC>, "connectedCallback" | "disconnectedCallback" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "icon" | "onIgdsClick" | "onIgdsChange" | "variant" | "counter" | "notification" | "notificationButton" | "notificationButtonSize" | "notificationButtonVariant"> & {
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsChange?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<BadgeWC, keyof HTMLElement>> & React.RefAttributes<BadgeWC>, "ref"> & React.RefAttributes<BadgeWC>>;
export { Badge, BadgeWC };
