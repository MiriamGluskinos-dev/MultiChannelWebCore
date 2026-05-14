import { IGDSElement } from '../abstractions';
declare class ToastContainer extends IGDSElement {
    static styles: import("lit").CSSResult;
    private dialog;
    private lastUrl;
    private cleanupObserver?;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private observeUrlChanges;
    closeAllToasts: () => void;
    render(): import("lit").TemplateResult<1>;
}
export { ToastContainer };
declare global {
    interface HTMLElementTagNameMap {
        'igds-toast-container': ToastContainer;
    }
}
