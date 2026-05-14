import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDS_DRAWER_POSITION } from './constants';
import { IGDSElement } from '../abstractions';
declare class Drawer extends IGDSElement {
    static styles: import("lit").CSSResult;
    private _trap;
    private _disableFocusLock;
    constructor();
    open: boolean;
    position?: `${IGDS_DRAWER_POSITION}`;
    label?: string;
    hideCloseButton?: boolean;
    hideOverlay?: boolean;
    isDrawerShown: boolean;
    isAnimationEnded?: boolean;
    set disableFocusLock(value: boolean);
    get disableFocusLock(): boolean;
    private readonly _drawerPanel;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    show(): void;
    hide(): void;
    private handleAnimationEnd;
    closeByBackdropClick(e: MouseEvent): void;
    handleSlotChange(): void;
    private isHidden;
    private isLabelDefined;
    render(): import("lit").TemplateResult<1>;
}
export { Drawer };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.drawer]: Drawer;
    }
}
