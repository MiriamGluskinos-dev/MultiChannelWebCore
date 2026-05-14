import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IgdsFooterNavigationContext } from './context';
declare class FooterNavigation extends IGDSElement {
    static styles: import("lit").CSSResult;
    context: IgdsFooterNavigationContext;
    navLinks: import("./types").FooterNavLinks[];
    private navLinkElements;
    globalLinkIndex: number;
    connectedCallback(): void;
    private onKeyDown;
    private getNavLinksTemplate;
    render(): import("lit").TemplateResult<1>;
}
export { FooterNavigation };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.footerNavigation]: FooterNavigation;
    }
}
