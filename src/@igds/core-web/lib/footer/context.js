import { createContext } from '@lit/context';
export class IgdsFooterNavigationContext {
    constructor() {
        this._navLinks = [];
        this.onChangeNavLinks = undefined;
    }
    getNavLinks() {
        return this._navLinks;
    }
    registerNavLink(navLink) {
        this._navLinks = [
            ...this._navLinks,
            {
                ...navLink,
            },
        ];
        this.updateContext();
    }
    removeNavLink(id) {
        this._navLinks = this._navLinks.filter((link) => link.id !== id);
    }
    updateContext() {
        if (this.onChangeNavLinks) {
            this.onChangeNavLinks();
        }
    }
}
export const igdsFooterNavigationContext = createContext(Symbol('igds-footer-navigation'));
