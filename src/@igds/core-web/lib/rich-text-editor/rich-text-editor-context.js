import { createContext } from '@lit/context';
export class IgdsRichTextEditorContext {
    constructor() {
        this.toolbarDisabled = false;
    }
}
export const igdsRichTextEditorContext = createContext(Symbol('igds-anchor'));
