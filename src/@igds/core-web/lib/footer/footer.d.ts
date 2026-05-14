import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { FooterVariants, FooterSocialUrl } from './types';
declare class Footer extends IGDSElement {
    static styles: import("lit").CSSResult;
    private readonly _mediaQueryObserver;
    constructor();
    variant: FooterVariants;
    frontPageUrl: string;
    copyright: string;
    logoUrl: string;
    logoAlt: string;
    aboutUrl: string;
    termsUrl: string;
    accessibilityUrl: string;
    phone: string;
    email?: string | undefined;
    contactUs?: FooterSocialUrl;
    socialUrls: FooterSocialUrl[];
    private isMobile;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleChange;
    private handleLogoClick;
    private handleLogoKeyDown;
    private getCopyrightText;
    private handleSubmit;
    redirectTo(url: string, prefix?: string): void;
    private handleLogoImageLoad;
    private renderMainFooter;
    private renderMediumVariantSection;
    private renderLargeVariantSection;
    private getFormTemplate;
    private getPlaceholderTemplate;
    private getSocialLinksTemplate;
    render(): import("lit").TemplateResult<1>;
}
export { Footer };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.footer]: Footer;
    }
}
