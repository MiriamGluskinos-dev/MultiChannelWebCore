import React from 'react';
import { Menu as MenuWC } from '@igds/core-web/menu';
declare const Menu: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<MenuWC>, "onKeyDown" | "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "open" | "onIgdsClick" | "variant" | "onIgdsOpen" | "onIgdsClose" | "position" | "highlightedId" | "removeHighlightedClass" | "handleEnterOrSpaceDown" | "handleEscapeDown" | "triggerButton" | "offset" | "highlightedSubMenuId" | "isSubMenuShown" | "menuElement" | "menuElements" | "triggers" | "subMenuItems" | "slottedSubMenuItems" | "onSelectMenuItem" | "onSelectMenuItemOnMobile" | "initializeTriggerButton" | "initializeIndentedMenu" | "handleTriggerChange" | "getPlacement" | "addStylesToTriggerButtonIcon" | "onBackIconKeyDown" | "onBackIconClick" | "getMenuItems" | "getSlottedMenuItems" | "isRelevantKey" | "handleArrowLeftDown" | "handleArrowRightDown" | "handleNavigateOnOpenSubmenu" | "getIndex" | "handleNavigateOnCloseSubmenu" | "handleArrowDownWhenNotHighlightedSubmenu" | "removeHighlightedSubmenuClass" | "focusFirstSubmenuItem" | "showSubmenuAndAddSubMenuItems" | "isSubmenuOpen" | "hideSubmenu" | "getCurrentItem" | "setCurrentItem"> & {
    onIgdsOpen?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsClose?: ((e: CustomEvent<any>) => void) | undefined;
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
        id: string | null;
    }>) => void) | undefined;
} & Partial<Omit<MenuWC, keyof HTMLElement>> & React.RefAttributes<MenuWC>, "ref"> & React.RefAttributes<MenuWC>>;
export { Menu, MenuWC };
