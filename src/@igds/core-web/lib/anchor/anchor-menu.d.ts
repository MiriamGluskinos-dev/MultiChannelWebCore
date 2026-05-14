import { IGDSElement } from '../abstractions';
import { IgdsAnchorContext } from './context';
import { IGDS_TAGS } from '../constants';
declare class AnchorMenu extends IGDSElement {
    static styles: import("lit").CSSResult;
    private readonly _mediaQueryObserver;
    constructor();
    context: IgdsAnchorContext;
    header: string;
    dir: string;
    anchorElements: Array<HTMLElement>;
    anchors: {
        id?: string;
        title?: string;
        href: string;
        active?: boolean;
    }[];
    selectedAnchorId: string | null;
    private isMobile;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private onAnchorItemKeyDown;
    private onKeyDown;
    private onMouseDown;
    private onMouseUp;
    private handleClick;
    private onFocus;
    private onBlur;
    private handleObserverChange;
}
export { AnchorMenu };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.anchorMenu]: AnchorMenu;
    }
}
