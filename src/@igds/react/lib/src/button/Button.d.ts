import React, { ComponentProps } from 'react';
import { type EventName } from '@lit/react';
import { Button as ButtonWC } from '@igds/core-web/button';
declare const ButtonComponent: import("@lit/react").ReactWebComponent<ButtonWC, {
    onIgdsClick: EventName<CustomEvent<{
        value: {
            nativeEvent: PointerEvent;
        };
    }>>;
    onIgdsFocus: EventName<CustomEvent<{
        value: string;
    }>>;
    onIgdsBlur: EventName<CustomEvent<{
        value: string;
    }>>;
    onIgdsKeydown: EventName<CustomEvent<{
        value: {
            nativeEvent: KeyboardEvent;
        };
    }>>;
    onIgdsKeyup: EventName<CustomEvent<{
        value: {
            nativeEvent: KeyboardEvent;
        };
    }>>;
}>;
type ButtonProps = ComponentProps<typeof ButtonComponent> & {
    icon?: React.ReactNode;
    secondIcon?: React.ReactNode;
};
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<ButtonWC>>;
export { Button, ButtonWC };
