import React from 'react';
import { Modal as ModalWC } from '@igds/core-web/modal';
declare const Modal: React.ForwardRefExoticComponent<Omit<Omit<React.HTMLAttributes<ModalWC>, "connectedCallback" | "disconnectedCallback" | "firstUpdated" | "updated" | "render" | "emit" | "renderOptions" | "renderRoot" | "isUpdatePending" | "hasUpdated" | "addController" | "removeController" | "attributeChangedCallback" | "requestUpdate" | "updateComplete" | "label" | "open" | "imageAlt" | "handleSlotChange" | "type" | "onIgdsPrimaryClick" | "onIgdsSecondaryClick" | "imageSrc" | "primaryActionLabel" | "secondaryActionLabel" | "onIgdsOpen" | "onIgdsClose" | "closeByBackdropClick" | "top" | "start" | "imageAutoSize" | "mobileImageSrc" | "mobileImageAlt" | "animated" | "disabledFocusLock" | "dialogElement" | "bodyElement" | "closeButton" | "requestClose" | "handleOpenModal" | "handleCloseModal" | "handlePrimaryButtonClick" | "handleSecondaryButtonClick" | "checkHeightOverflow" | "handleCancelingDialogWhenFocusLockDisabled" | "deactivateFocusLock"> & {
    onIgdsOpen?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsClose?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsPrimaryClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
    onIgdsSecondaryClick?: ((e: CustomEvent<{
        value: string;
    }>) => void) | undefined;
} & Partial<Omit<ModalWC, keyof HTMLElement>> & React.RefAttributes<ModalWC>, "ref"> & React.RefAttributes<ModalWC>>;
export { Modal, ModalWC };
