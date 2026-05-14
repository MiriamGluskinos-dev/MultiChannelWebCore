import React from 'react';
import { Header as HeaderWC } from '@igds/core-web/header';
declare const Header: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<HeaderWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "variant" | "onIgdsLogoClick" | "frontPageUrl" | "logoUrl" | "logoAlt" | "searchLabel" | "isSearchExpanded" | "isSearchButtonShown" | "isBottomNav" | "hasSearch" | "isMobile" | "isTablet" | "renderHamburgerSlot" | "renderLogo" | "renderNavSlot" | "renderNavigation" | "renderSearch" | "renderAuth" | "renderBottomNavigation"> & {
    onIgdsLogoClick?: ((e: CustomEvent<{
        value: "navigate" | "idle";
    }>) => void) | undefined;
} & Partial<Omit<HeaderWC, keyof HTMLElement>> & React.RefAttributes<HeaderWC>, "ref"> & React.RefAttributes<HeaderWC>>;
export { Header, HeaderWC };
