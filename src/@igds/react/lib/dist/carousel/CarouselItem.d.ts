import React from 'react';
import { CarouselItem as CarouselItemWC } from '@igds/core-web/carousel';
declare const CarouselItem: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<CarouselItemWC>, "connectedCallback" | "disconnectedCallback" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "context" | "createRenderRoot" | "_listItems"> & {} & Partial<Omit<CarouselItemWC, keyof HTMLElement>> & React.RefAttributes<CarouselItemWC>, "ref"> & React.RefAttributes<CarouselItemWC>>;
export { CarouselItem, CarouselItemWC };
