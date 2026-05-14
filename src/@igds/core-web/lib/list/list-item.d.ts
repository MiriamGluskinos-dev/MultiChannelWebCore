import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDSElement } from '../abstractions';
import { IgdsListContext } from './list-context';
declare class ListItem extends IGDSElement {
    header: string;
    subheader?: string;
    moreText?: string;
    itemId?: string;
    moreInfo?: string;
    icon?: string;
    draggableItem: boolean;
    imageSrc?: string;
    imageAlt?: string;
    context?: IgdsListContext;
    itemSlot: HTMLSlotElement;
    firstUpdated(changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
export { ListItem };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.listItem]: ListItem;
    }
}
