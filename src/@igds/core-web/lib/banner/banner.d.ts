import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IGDS_BANNER_VARIANT } from './constants';
declare class Banner extends IGDSElement {
    static styles: import("lit").CSSResult;
    variant?: `${IGDS_BANNER_VARIANT}`;
    imgSrc: string;
    imageAlt: string;
    title: string;
    description?: string;
    actionLabel?: string;
    footerText?: string;
    footerActionLabel?: string;
    footerActionUrl?: string;
    private handleClick;
    private handleFooterClick;
    private renderTextRightBanner;
    private renderTextCenterBanner;
    private renderPictureOnlyBanner;
    render(): import("lit").TemplateResult<1>;
}
export { Banner };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.banner]: Banner;
    }
}
