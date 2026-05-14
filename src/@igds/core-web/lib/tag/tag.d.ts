import { IGDSElement } from '../abstractions';
import { IGDS_TAGS } from '../constants';
import { IGDS_TAG_SIZES } from './constants';
declare class Tag extends IGDSElement {
    static styles: import("lit").CSSResult;
    id: string;
    size?: `${IGDS_TAG_SIZES}`;
    icon: string;
    disabled: boolean;
    removable: boolean;
    firstUpdated(): void;
    private handleClick;
    private handleRemove;
    private handleKeyDown;
    private getRole;
    render(): import("lit").TemplateResult<1>;
}
export { Tag };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.tag]: Tag;
    }
}
