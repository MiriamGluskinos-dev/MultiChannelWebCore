import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IGDS_HEADER_VARIANT } from './constants';
import '../button';
import '../icon';
import '../divider';
declare class Header extends IGDSElement {
    static styles: import("lit").CSSResult;
    private readonly _mobileMediaQueryObserver;
    private readonly _tabletMediaQueryObserver;
    private searchElement?;
    private authElement?;
    private hamburgerIcon?;
    constructor();
    logoUrl: string;
    logoAlt: string;
    frontPageUrl: string;
    variant: `${IGDS_HEADER_VARIANT}`;
    searchLabel: string;
    isSearchExpanded: boolean;
    isSearchButtonShown: boolean;
    isBottomNav: boolean;
    hasSearch: boolean;
    isMobile: boolean;
    isTablet: boolean;
    private searchContainer;
    private searchEl;
    private mutationObserver?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleScreenChange;
    private get isOnFrontPage();
    private handleBottomNavSlotChange;
    private handleSearchSlotChange;
    private handleAuthSlotChange;
    private handleNavSlotChange;
    private expandSearch;
    private collapseSearch;
    private handleShowSearch;
    private handleLogoClick;
    private handleLogoKeyDown;
    private handleHamburgerMenuOpen;
    private handleHamburgerMenuClose;
    private findHamburgerButton;
    renderHamburgerSlot(): import("lit").TemplateResult<1>;
    renderLogo(): import("lit").TemplateResult<1> | undefined;
    renderNavSlot(): import("lit").TemplateResult<1>;
    renderNavigation(): import("lit").TemplateResult<1>;
    renderSearch(): import("lit").TemplateResult<1>;
    renderAuth(): import("lit").TemplateResult<1>;
    renderBottomNavigation(): import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
export { Header };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.header]: Header;
    }
}
