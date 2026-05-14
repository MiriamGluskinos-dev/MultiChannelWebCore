import React from 'react';
import { Skeleton as SkeletonWC } from '@igds/core-web/skeleton';
declare const Skeleton: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<SkeletonWC>, "connectedCallback" | "disconnectedCallback" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "variant" | "width" | "update" | "radius" | "height" | "currentWidth" | "currentHeight"> & {} & Partial<Omit<SkeletonWC, keyof HTMLElement>> & React.RefAttributes<SkeletonWC>, "ref"> & React.RefAttributes<SkeletonWC>>;
export { Skeleton, SkeletonWC };
