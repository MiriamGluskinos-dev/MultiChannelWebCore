import { FooterNavLinks } from './types';
export declare class IgdsFooterNavigationContext {
    private _navLinks;
    onChangeNavLinks?: () => void;
    getNavLinks(): FooterNavLinks[];
    registerNavLink(navLink: FooterNavLinks): void;
    removeNavLink(id: string): void;
    updateContext(): void;
}
export declare const igdsFooterNavigationContext: {
    __context__: IgdsFooterNavigationContext;
};
