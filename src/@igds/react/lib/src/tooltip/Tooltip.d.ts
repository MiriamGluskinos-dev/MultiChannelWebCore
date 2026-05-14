import React, { ComponentProps } from 'react';
import { type EventName } from '@lit/react';
import { Tooltip as TooltipWC } from '@igds/core-web/tooltip';
declare const TooltipComponent: import("@lit/react").ReactWebComponent<TooltipWC, {
    onIgdsHide: EventName<CustomEvent<{
        value: string;
    }>>;
    onIgdsShow: EventName<CustomEvent<{
        value: string;
    }>>;
}>;
type TooltipProps = ComponentProps<typeof TooltipComponent> & {
    htmlContent?: React.ReactNode;
};
declare const Tooltip: React.ForwardRefExoticComponent<Omit<TooltipProps, "ref"> & React.RefAttributes<TooltipWC>>;
export { Tooltip, TooltipWC };
