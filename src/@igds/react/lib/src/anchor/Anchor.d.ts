import React from 'react';
import { Anchor as AnchorWC } from '@igds/core-web/anchor';
declare const Anchor: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<AnchorWC>, "connectedCallback" | "disconnectedCallback" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "anchorId" | "href" | "anchorTitle" | "active" | "_anchorId" | "context"> & {} & Partial<Omit<AnchorWC, keyof HTMLElement>> & React.RefAttributes<AnchorWC>, "ref"> & React.RefAttributes<AnchorWC>>;
export { Anchor, AnchorWC };
