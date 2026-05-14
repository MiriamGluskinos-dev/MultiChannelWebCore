import { createContext } from '@lit/context';
export class IgdsAnchorContext {
    constructor() {
        this._anchors = [];
        this.onChangeAnchors = undefined;
    }
    getAnchors() {
        return this._anchors;
    }
    registerAnchor(id, { title, href, active }) {
        this._anchors = [
            ...this._anchors,
            {
                id,
                title,
                href,
                active,
            },
        ];
        this.updateContext('anchors');
        return id;
    }
    removeAnchor(id) {
        this._anchors = this._anchors.filter((anchor) => anchor.id !== id);
    }
    updateContext(part) {
        if (part === 'anchors' && this.onChangeAnchors) {
            this.onChangeAnchors();
        }
    }
}
export const igdsAnchorContext = createContext(Symbol('igds-anchor'));
