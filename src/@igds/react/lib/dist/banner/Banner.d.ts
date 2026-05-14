import React from 'react';
import { Banner as BannerWC } from '@igds/core-web/banner';
declare const Banner: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<BannerWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "onIgdsClick" | "variant" | "onIgdsFooterClick" | "imgSrc" | "imageAlt" | "description" | "actionLabel" | "footerText" | "footerActionLabel" | "footerActionUrl"> & {
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFooterClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<BannerWC, keyof HTMLElement>> & React.RefAttributes<BannerWC>, "ref"> & React.RefAttributes<BannerWC>>;
export { Banner, BannerWC };
