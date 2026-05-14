import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsAnchorContext } from './context';
declare class Anchor extends IGDSElement {
    anchorId?: string;
    href: string;
    anchorTitle?: string;
    active: boolean;
    _anchorId: string;
    context?: IgdsAnchorContext;
    connectedCallback(): void;
    private registerAnchor;
    disconnectedCallback(): void;
}
export { Anchor };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.anchor]: Anchor;
    }
}
