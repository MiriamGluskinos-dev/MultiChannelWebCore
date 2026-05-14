import { PropertyValues } from 'lit';
import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { FooterNavLink } from './types';
import { IgdsFooterNavigationContext } from './context';
declare class FooterNavigationItem extends IGDSElement {
    navLinkId: string;
    header: string;
    links: FooterNavLink[];
    context?: IgdsFooterNavigationContext;
    updated(changedProperties: PropertyValues): void;
    private registerNavLink;
    disconnectedCallback(): void;
}
export { FooterNavigationItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.footerNavigationItem]: FooterNavigationItem;
    }
}
