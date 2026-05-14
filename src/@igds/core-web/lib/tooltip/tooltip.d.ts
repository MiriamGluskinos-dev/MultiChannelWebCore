import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { IGDS_PLACEMENTS } from '../constants';
import { IGDS_TOOLTIP_TYPE } from './constant';
import '../icon';
declare class Tooltip extends IGDSElement {
    static styles: import("lit").CSSResult[];
    private _rendered;
    private timerId;
    private lastFocusedElement;
    private isListenersAlreadyInitialized;
    content: string;
    placement: `${IGDS_PLACEMENTS}`;
    type: `${IGDS_TOOLTIP_TYPE}`;
    disabled: boolean;
    inverted: boolean;
    shown: boolean;
    width: number | undefined;
    private isPopoverClosing;
    hostElement: HTMLElement;
    tooltipElement: HTMLElement;
    tooltipArrow: HTMLElement;
    tooltipTrigger: HTMLElement;
    private readonly slotNodes;
    private popoverCloseCleanup;
    private initPosition;
    initEventListeners(): void;
    removeEventListeners(): void;
    private getPlacement;
    private open;
    private close;
    private hide;
    private show;
    private openByClick;
    private closeByEsc;
    private saveFocusedElement;
    private returnFocusBack;
    private handleCloseClick;
    private resizeHandler;
    private fitToScreen;
    constructor();
    protected firstUpdated(_changedProperties: PropertyValues): void;
    private cancelPopoverCloseAnimation;
    private openPopover;
    private schedulePopoverHideAfterCloseAnimation;
    protected updated(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    manageListeners(changedProperties: PropertyValues): void;
    get isTopPlacement(): boolean;
    get isBottomPlacement(): boolean;
    get isStartPlacement(): boolean;
    get isEndPlacement(): boolean;
    render(): import("lit").TemplateResult<1>;
}
export { Tooltip };
declare global {
    interface HTMLElementTagNameMap {
        'igds-tooltip': Tooltip;
    }
}
