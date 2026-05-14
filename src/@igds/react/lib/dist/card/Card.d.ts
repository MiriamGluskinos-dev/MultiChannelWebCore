import React from 'react';
import { Card as CardWC } from '@igds/core-web/card';
declare const Card: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<CardWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "disabled" | "onIgdsClick" | "onIgdsFocus" | "onIgdsBlur" | "variant" | "imageAlt" | "description" | "onIgdsKeydown" | "size" | "type" | "onIgdsFavoriteToggle" | "onIgdsPrimaryClick" | "onIgdsSecondaryClick" | "direction" | "interactive" | "subtitle" | "imageSrc" | "imageFit" | "favoriteVisible" | "defaultFavoriteState" | "favoriteIconStateActive" | "favoriteIconStateInactive" | "favoriteLabel" | "primaryActionLabel" | "secondaryActionLabel" | "willUpdate" | "handleClick" | "handleFavoriteToggle" | "handlePrimaryAction" | "handleSecondaryAction" | "getCardTabindex" | "getCardCssClasses" | "renderFavoriteButton" | "renderCtaButtons" | "renderCardImage" | "hasSubtitle" | "hasDescription" | "hasLabel"> & {
    onIgdsClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFavoriteToggle?: ((e: CustomEvent<{
        value: {
            favorite: boolean;
        };
    }>) => void) | undefined;
    onIgdsPrimaryClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSecondaryClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsKeydown?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsFocus?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsBlur?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<CardWC, keyof HTMLElement>> & React.RefAttributes<CardWC>, "ref"> & React.RefAttributes<CardWC>>;
export { Card, CardWC };
