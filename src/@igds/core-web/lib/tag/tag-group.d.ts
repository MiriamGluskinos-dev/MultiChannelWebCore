import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
declare class TagGroup extends IGDSElement {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export { TagGroup };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tagGroup]: TagGroup;
    }
}
