import { PropertyValues } from 'lit';
import { IGDS_TAGS } from '../constants';
import { IGDS_LIST_VARIANTS } from './constants';
import { IGDSElement } from '../abstractions';
import { IgdsListContext } from './list-context';
import '../icon';
declare class List extends IGDSElement {
    static styles: import("lit").CSSResult;
    private _sortable;
    variant: `${IGDS_LIST_VARIANTS}`;
    droppable?: boolean;
    context: IgdsListContext;
    items: import("./types/list-item-details").ListItemDetails[];
    openedItemIds: string[];
    keyboardDraggingElementId: string | undefined;
    dragging: boolean;
    list: HTMLElement;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    update(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    initDragAndDrop(): void;
    setDragging(isDragging: boolean): void;
    hasMoreContent(value: string | HTMLElement[] | undefined): boolean;
    openItem(id: string): void;
    closeItem(id: string): void;
    toggleItem(id: string): void;
    handleDragButtonKeyPress(event: KeyboardEvent): void;
    startKeyboardDrag(id: string): void;
    endKeyboardDrag(): void;
    processArrowsKeyDown(event: KeyboardEvent, index: number): void;
    listenKeyboardWhileDragging(event: KeyboardEvent): void;
    getDragAndDropControl(id: string): import("lit").TemplateResult<1>;
    renderDataList(): import("lit").TemplateResult<1>;
    renderOrderedList(): import("lit").TemplateResult<1>;
    renderUnorderedList(): import("lit").TemplateResult<1>;
    render(): import("lit").TemplateResult<1>;
}
export { List };
declare global {
    interface HTMLElementTagNameMap {
        [IGDS_TAGS.list]: List;
    }
}
