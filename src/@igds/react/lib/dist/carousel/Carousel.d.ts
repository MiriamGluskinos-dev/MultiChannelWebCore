import React from 'react';
import { Carousel as CarouselWC } from '@igds/core-web/carousel';
declare const Carousel: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<CarouselWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "variant" | "subtitle" | "onIgdsSlideChange" | "onIgdsNext" | "onIgdsPrev" | "slidesPerView" | "loop" | "autoplay" | "interval" | "autopause"> & {
    onIgdsSlideChange?: ((e: CustomEvent<{
        value: string;
        activeIndex: number;
    }>) => void) | undefined;
    onIgdsNext?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsPrev?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<CarouselWC, keyof HTMLElement>> & React.RefAttributes<CarouselWC>, "ref"> & React.RefAttributes<CarouselWC>>;
export { Carousel, CarouselWC };
