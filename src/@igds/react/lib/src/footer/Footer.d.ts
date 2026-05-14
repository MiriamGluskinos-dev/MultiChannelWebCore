import React from 'react';
import { Footer as FooterWC } from '@igds/core-web/footer';
declare const Footer: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<FooterWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "variant" | "onIgdsLogoClick" | "onIgdsSubmit" | "frontPageUrl" | "copyright" | "logoUrl" | "logoAlt" | "aboutUrl" | "termsUrl" | "accessibilityUrl" | "phone" | "email" | "contactUs" | "socialUrls" | "redirectTo"> & {
    onIgdsLogoClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSubmit?: ((e: CustomEvent<{
        value: {
            fullName: string;
            email: string;
        };
    }>) => void) | undefined;
} & Partial<Omit<FooterWC, keyof HTMLElement>> & React.RefAttributes<FooterWC>, "ref"> & React.RefAttributes<FooterWC>>;
export { Footer, FooterWC };
