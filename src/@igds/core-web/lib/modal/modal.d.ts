import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { IGDS_MODAL_TYPE } from './constants';
import '../icon';
import '../button';
declare class Modal extends IGDSElement {
    static styles: import("lit").CSSResult[];
    private trap;
    private _disabledFocusLock;
    open?: boolean;
    label: string;
    type?: `${IGDS_MODAL_TYPE}`;
    top?: number | undefined;
    start?: number | undefined;
    imageAutoSize?: boolean;
    imageSrc?: string;
    imageAlt?: string;
    mobileImageSrc?: string;
    mobileImageAlt?: string;
    primaryActionLabel?: string;
    secondaryActionLabel?: string;
    animated?: string;
    set disabledFocusLock(value: boolean);
    get disabledFocusLock(): boolean;
    dialogElement: HTMLDialogElement | null;
    bodyElement: HTMLDivElement | null;
    closeButton: HTMLButtonElement | null;
    private isHeightOverflowed;
    requestClose(): void;
    closeByBackdropClick(e: MouseEvent): void;
    handleOpenModal(): void;
    handleCloseModal(): void;
    handlePrimaryButtonClick(): void;
    handleSecondaryButtonClick(): void;
    handleSlotChange(): void;
    private resizeHandler;
    checkHeightOverflow(): void;
    handleCancelingDialogWhenFocusLockDisabled(openChanged: boolean): void;
    deactivateFocusLock(): void;
    constructor();
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
export { Modal };
declare global {
    interface HTMLElementTagNameMap {
        'igds-modal': Modal;
    }
}
