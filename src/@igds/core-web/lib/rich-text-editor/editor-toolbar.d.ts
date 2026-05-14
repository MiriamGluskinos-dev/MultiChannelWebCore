import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
declare class EditorToolbar extends IGDSElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export { EditorToolbar };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.editorToolbar]: EditorToolbar;
    }
}
