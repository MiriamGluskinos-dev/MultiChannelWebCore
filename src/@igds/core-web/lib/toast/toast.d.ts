import { IGDSElement } from '../abstractions';
import { IGDS_TOAST_TYPES, IGDS_TOAST_VARIANT } from './constants';
import '../icon';
import './toast-container';
declare class Toast extends IGDSElement {
    static styles: import("lit").CSSResult;
    type: `${IGDS_TOAST_TYPES}`;
    variant: `${IGDS_TOAST_VARIANT}`;
    duration?: number;
    inline?: boolean;
    autoClose?: boolean;
    closable?: boolean;
    linkActionLabel?: string;
    linkActionUrl?: string;
    closeActionLabel?: string;
    private closeTimeout?;
    private originalParent;
    private getToastContainer;
    show(): void;
    close(): void;
    private handleAutoClose;
    private clearAutoClose;
    private handleLinkClick;
    private getIcon;
    private getToastClass;
    private renderFloatingToast;
    private renderInlineToast;
    render(): import("lit").TemplateResult<1>;
}
export { Toast };
declare global {
    interface HTMLElementTagNameMap {
        'igds-toast': Toast;
    }
}
